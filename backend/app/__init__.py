"""
__init__.py is a special Python file that marks a directory as a package.
"""
from flask import Flask
from .routes.categories import categories_bp

def create_app():
    """
    It is an application factory. This means that it creates and configures the Flask application instance.
    """

    app = Flask(__name__)  # Creates an instance of the Flask application
    """
    This object is responsible for managing the routes and requests the application will handle.
    """

    # Register Blueprints
    """
    A Blueprint in Flask is a way to organize and modularize your application. It allows you to split your application into smaller, reusable components, each with its own routes, templates, and other resources.
    """
    app.register_blueprint(categories_bp, url_prefix='/categories')

    """
    Returns the instance of the Flask application that is used to run the application.
    """
    return app
