from flask import Blueprint, request, jsonify
from app.services.user_service import UserService
from flask_jwt_extended import create_access_token

auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')  # Adicione o prefixo

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    try:
        user = UserService.register_user(data)
        return jsonify({
            'message': 'User created successfully', 
            'user_id': user.id
        }), 201
    except ValueError as e:
        return jsonify({'error': str(e)}), 400  # Corrija a sintaxe do JSON

@auth_bp.route('/login', methods=['POST'])
def login():
    # Implementação futura
    pass

@auth_bp.route('/users', methods=['GET'])
def get_users():
    from app.models.user import User  # Importe o modelo diretamente
    
    users = User.query.all()  # Acesso CORRETO ao modelo
    
    users_data = [
        {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'role': user.role
        } for user in users
    ]
    
    return jsonify(users_data), 200
