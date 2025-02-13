from werkzeug.security import generate_password_hash
from app.models.user import User
from app.extensions import db

class UserService:
    @staticmethod
    def register_user(data):
        # Validação básica
        required_fields = ['name', 'email', 'password']
        if not all(field in data for field in required_fields):
            raise ValueError('Missing required fields')
        
        # Verifica se o usuário já existe
        if User.query.filter_by(email=data['email']).first():
            raise ValueError('Email already registered')
        
        # Cria o usuário
        new_user = User(
            name=data['name'],
            email=data['email'],
            password_hash=generate_password_hash(data['password'])
        )
        
        db.session.add(new_user)
        db.session.commit()
        
        return new_user