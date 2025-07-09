#!/bin/bash

replace_in_file() {
    local pattern="$1"
    local replacement="$2"
    local file="$3"

    # Escape backslashes first
    replacement=${replacement//\\/\\\\}
    # Escape ampersands
    replacement=${replacement//&/\\&}
    # Escape delimiter '|'
    replacement=${replacement//|/\\|}
    # Escape slashes (optional, only if '/' is used as delimiter — we use '|')
    # replacement=${replacement//\//\\/}

    sed -i "s|$pattern|$replacement|g" "$file"
}
# Script to update company information in JS files
echo "==== UPDATE-JS SCRIPT STARTED: $(date) ===="
echo "Current directory: $(pwd)"

# Check if required environment variables are set
required_vars=("COMPANY_TEMPLATE" "COMPANY_COLOR" "COMPANY_NAME" "COMPANY_EMAIL" "COMPANY_PHONE" "COMPANY_ADDRESS" "COMPANY_LOGO")

echo "Checking required environment variables..."
for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "Error: $var is not set"
        exit 1
    else
        echo "✓ $var is set to: ${!var}"
    fi
done

# Find and update the company info JS file
COMPANY_INFO_FILE="./src/templates/common/index.js"

if [ -f "$COMPANY_INFO_FILE" ]; then
    echo "Found company info file: $COMPANY_INFO_FILE"
    
    # Create a temporary file
    temp_file=$(mktemp)
    echo "Created temporary file: $temp_file"
    
    # Update company information placeholders
    echo "Updating company information in JS file..."

    COMPANY_TEMPLATE_MODIFIED="${COMPANY_TEMPLATE//_/-}"
    sed "s|%TEMPLATE_NAME%|$COMPANY_TEMPLATE_MODIFIED|g" "$COMPANY_INFO_FILE" > "$temp_file"

    replace_in_file "%COMPANY_NAME%" "$COMPANY_NAME" "$temp_file"
    replace_in_file "%COMPANY_EMAIL%" "$COMPANY_EMAIL" "$temp_file"
    replace_in_file "%COMPANY_PHONE%" "$COMPANY_PHONE" "$temp_file"
    replace_in_file "%COMPANY_ADDRESS%" "$COMPANY_ADDRESS" "$temp_file"
    replace_in_file "%COMPANY_LOGO%" "$COMPANY_LOGO" "$temp_file"
    replace_in_file "%COMPANY_COLOR%" "$COMPANY_COLOR" "$temp_file"

    if [ -n "$COMPANY_IMAGES" ]; then
        replace_in_file "%COMPANY_IMAGES%" "$COMPANY_IMAGES" "$temp_file"
    fi

    if [ -n "$COMPANY_CONSENT" ]; then
        replace_in_file "%COMPANY_CONSENT%" "$COMPANY_CONSENT" "$temp_file"
    fi

    # Move the processed file back to original location
    echo "Moving processed file back to original location..."
    mv "$temp_file" "$COMPANY_INFO_FILE"
    echo "Updated company info file: $COMPANY_INFO_FILE"
else
    echo "Error: Company info file not found at $COMPANY_INFO_FILE"
    exit 1
fi

echo "All JS files have been updated successfully!"
echo "==== UPDATE-JS SCRIPT COMPLETED: $(date) ====" 