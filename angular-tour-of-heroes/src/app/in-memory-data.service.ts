import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: "Mr. Good" },
            { id: 12, name: "Narco" },
            { id: 13, name: "Bombasto" },
            { id: 14, name: "Celerytas" },
            { id: 15, name: "Magenta" },
            { id: 16, name: "Rubberguy" },
            { id: 17, name: "Dynama" },
            { id: 18, name: "Dr IQ" },
            { id: 19, name: "Mogma" },
            { id: 20, name: "Tornado" }
        ]

        return {
            heroes,
        };
    }
}