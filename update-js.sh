#!/bin/bash

# Script to update company information in JS files
echo "==== UPDATE-JS SCRIPT STARTED: $(date) ===="
echo "Current directory: $(pwd)"

# Check if required environment variables are set
required_vars=("COMPANY_TEMPLATE" "COMPANY_COLOR" "COMPANY_NAME" "COMPANY_EMAIL" "COMPANY_PHONE" "COMPANY_ADDRESS" "COMPANY_IMAGE" "COMPANY_LOGO")

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
    sed "s/%TEMPLATE_NAME%/$COMPANY_TEMPLATE/g" "$COMPANY_INFO_FILE" > "$temp_file"
    sed -i "s/%COMPANY_NAME%/$COMPANY_NAME/g" "$temp_file"
    sed -i "s/%COMPANY_EMAIL%/$COMPANY_EMAIL/g" "$temp_file"
    sed -i "s/%COMPANY_PHONE%/$COMPANY_PHONE/g" "$temp_file"
    sed -i "s/%COMPANY_ADDRESS%/$COMPANY_ADDRESS/g" "$temp_file"
    sed -i "s/%COMPANY_LOGO%/$COMPANY_LOGO/g" "$temp_file"
    sed -i "s/%COMPANY_IMAGE%/$COMPANY_IMAGE/g" "$temp_file"
    sed -i "s/%COMPANY_COLOR%/$COMPANY_COLOR/g" "$temp_file"

    if [ -n "$COMPANY_CONSENT" ]; then
        sed -i "s/%COMPANY_CONSENT%/$COMPANY_CONSENT/g" "$temp_file"
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