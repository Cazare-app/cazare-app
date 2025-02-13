from flask import Flask
from app.extensions import db, jwt
from app.config.config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Inicializa as extensões
    db.init_app(app)
    jwt.init_app(app)

    with app.app_context():
        # Importe os modelos e blueprints AQUI
        from app.models.user import User
        from app.routes.auth import auth_bp
        from app.routes.health import health_bp

        # Registra os blueprints
        app.register_blueprint(auth_bp)
        app.register_blueprint(health_bp)

    return app