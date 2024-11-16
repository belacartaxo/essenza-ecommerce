import re

# Function to sanitize the input and ensure only alphanumeric characters and spaces are allowed
def sanitize_input(input_string):
    # Remove any character that is not alphanumeric or a space
    sanitized = re.sub(r'[^a-zA-Z0-9\s]', '', input_string)

    # Remove extra spaces at the beginning and end
    sanitized = sanitized.strip()

    # Replace multiple spaces with a single space
    sanitized = ' '.join(sanitized.split())

    return sanitized
