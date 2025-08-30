import { Injectable } from '@nestjs/common';

@Injectable()
export class RiderService {
  getHello(): string {
    return 'Hello World!';
  }

  // Méthode fictive pour récupérer un rider par son id
  getRiderById(id: string) {
    // Ici, on retourne un objet fictif. À remplacer par une vraie logique de récupération en base de données.
    return {
      id,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }
}
