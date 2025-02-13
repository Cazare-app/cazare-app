from app.models.user import User
from app.extensions import db

class UserRepository:
    @staticmethod
    def create_user(user_data):
        new_user = User(**user_data)
        db.session.add(new_user)
        db.session.commit()
        return new_user

    @staticmethod
    def find_by_email(email):
        return User.query.filter_by(email=email).first()
