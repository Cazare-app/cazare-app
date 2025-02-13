from app.app import create_app
from app.extensions import db

# Cria a aplicação e inicializa o contexto
app = create_app()

def create_tables():
    with app.app_context():
        # Importe os modelos DENTRO do contexto
        from app.models.user import User
        
        # Cria as tabelas
        db.create_all()
        print("✅ Tabelas criadas com sucesso!")

if __name__ == '__main__':
    create_tables()