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

    sed -i '' "s|$pattern|$replacement|g" "$file"
}

# Image URLs for company
declare -a IMAGES=(
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    'https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
)
# Script to update company information in JS files
echo "==== UPDATE-JS SCRIPT STARTED: $(date) ===="
echo "Current directory: $(pwd)"

# Check if required environment variables are set
required_vars=("COMPANY_COLOR" "COMPANY_NAME" "COMPANY_EMAIL" "COMPANY_PHONE" "COMPANY_ADDRESS" "COMPANY_LOGO")

echo "Checking required environment variables..."
for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "Error: $var is not set"
        exit 1
    else
        echo "✓ $var is set to: ${!var}"
    fi
done

# Handle COMPANY_IMAGES (index 0-11, default to random if not provided or out of range)
if [ -z "$COMPANY_IMAGES" ] || ! [[ "$COMPANY_IMAGES" =~ ^[0-9]+$ ]] || [ "$COMPANY_IMAGES" -lt 0 ] || [ "$COMPANY_IMAGES" -ge ${#IMAGES[@]} ]; then
    COMPANY_IMAGES=$((RANDOM % ${#IMAGES[@]}))
    echo "COMPANY_IMAGES not provided or out of range, using random index: $COMPANY_IMAGES"
else
    echo "✓ COMPANY_IMAGES is set to: $COMPANY_IMAGES"
fi

# Build COMPANY_IMAGES_DATA JSON with the selected image
COMPANY_IMAGES_DATA="{ \"1\": \"${IMAGES[$COMPANY_IMAGES]}\", \"2\": \"${IMAGES[1]}\", \"3\": \"${IMAGES[2]}\", \"4\": \"${IMAGES[3]}\" }"

# Find and update the company info JS file
COMPANY_INFO_FILE="./src/templates/common/index.js"

if [ -f "$COMPANY_INFO_FILE" ]; then
    echo "Found company info file: $COMPANY_INFO_FILE"
    
    # Create a temporary file
    temp_file=$(mktemp)
    echo "Created temporary file: $temp_file"
    
    # Update company information placeholders
    echo "Updating company information in JS file..."
    
    COMPANY_TEMPLATE="real_estate"
    COMPANY_TEMPLATE_MODIFIED="${COMPANY_TEMPLATE//_/-}"
    sed "s|%TEMPLATE_NAME%|$COMPANY_TEMPLATE_MODIFIED|g" "$COMPANY_INFO_FILE" > "$temp_file"

    replace_in_file "%COMPANY_NAME%" "$COMPANY_NAME" "$temp_file"
    replace_in_file "%COMPANY_EMAIL%" "$COMPANY_EMAIL" "$temp_file"
    replace_in_file "%COMPANY_PHONE%" "$COMPANY_PHONE" "$temp_file"
    replace_in_file "%COMPANY_ADDRESS%" "$COMPANY_ADDRESS" "$temp_file"
    replace_in_file "%COMPANY_LOGO%" "$COMPANY_LOGO" "$temp_file"
    replace_in_file "%COMPANY_COLOR%" "$COMPANY_COLOR" "$temp_file"

    if [ -n "$COMPANY_IMAGES_DATA" ]; then
        replace_in_file "%COMPANY_IMAGES%" "$COMPANY_IMAGES_DATA" "$temp_file"
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