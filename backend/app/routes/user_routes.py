from flask import Blueprint, jsonify, request
from app.services.user_service import UserService

user_bp = Blueprint('users', __name__)

@user_bp.route('/users', methods=['GET'])
def get_users():
    users = UserService.get_all_users()
    return jsonify([{"id": user.id, "name": user.name, "email": user.email} for user in users])

@user_bp.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        UserService.delete_user(user_id)
        return jsonify({'message': 'Usuário deletado com sucesso!'})
    except ValueError as e:
        return jsonify({'error': str(e)}), 404
