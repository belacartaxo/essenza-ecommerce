from app import create_app
from flask_cors import CORS

"""
The create_app function is responsible for creating and configuring the Flask application.
It sets up the application with necessary configurations such as database connections, route configurations, middlewares, etc.
"""
app = create_app()
CORS(app)

if __name__ == '__main__':  # Checks if the script is being executed directly
    """
    This is a common check to ensure that the Flask application is only started if the file is executed directly.
    """
    app.run(debug=True)  # Starts the Flask server
