from flask import Blueprint, request, jsonify
from ..utils.sanitize_input import sanitize_input
from ..utils.get_db_connection import get_db_connection

categories_bp = Blueprint('categories', __name__)
"""
Creating a Blueprint that will group the routes related to categories
"""

@categories_bp.route('/add', methods=['POST'])  # Add a new category to the database
def add_category():  # This function will be executed when the /add route is called
    data = request.get_json()  # Get data from the request body
    
    """
        This checks if:
            The data was received (if data is None or empty, validation fails).
            The 'category_name' key exists in data.
            The 'category_name' value is not empty or made up only of white spaces (using .strip() to remove spaces).
    """
    if not data or 'category_name' not in data or not data['category_name'].strip():
        return jsonify({'error': 'Category name is required'}), 400

    category_name = sanitize_input(data['category_name'])  # Clean the input

    # Checking the size
    if len(category_name) > 30:
        return jsonify({'error': 'Category name is too long'}), 400

    try:
        # Connect to the database
        conn = get_db_connection()
        cur = conn.cursor()

        # Check if the category already exists
        cur.execute("SELECT * FROM categories WHERE category_name = ?", (category_name,))
        existing_category = cur.fetchone()  # Returns the first row that matches the query

        if existing_category:
            # If the category already exists, return an error
            return jsonify({'error': 'Category already exists'}), 400

        # Insert the new category
        cur.execute("""
            INSERT INTO categories (category_name) VALUES (?);
        """, (category_name,))

        conn.commit()  # Save changes to the database
        conn.close()   # Close the connection

        return jsonify({'message': 'Category added successfully!'}), 201
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Failed to add category'}), 500
