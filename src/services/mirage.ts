import { belongsTo, createServer, hasMany, Model } from "miragejs";

export function makeServer() {
  const server = createServer({
    models: {
      category: Model.extend({
        technologies: hasMany(),
      }),
      technology: Model.extend({
        categories: belongsTo(),
      }),
    },

    routes() {
        this.namespace = "api";

        this.get("/categories", () => {
            return [
                {
                    "id": 1,
                    "name": "designAndPrototyping",
                    "translationObjectName": "skillsSection.skillType1",
                },
                {
                    "id": 2,
                    "name": "development",
                    "translationObjectName": "skillsSection.skillType2",
                },
                {
                    "id": 3,
                    "name": "database",
                    "translationObjectName": "skillsSection.skillType3",
                },
                {
                    "id": 4,
                    "name": "devOps",
                    "translationObjectName": "skillsSection.skillType4",
                },
            ];
        });

        this.get("/technologies", () => (
            [
                {
                    "id": 1,
                    "name": "HTML",
                    "categoryId": 2,
                    "iconName": "vscode-icons:file-type-html",
                },
                {
                    "id": 2,
                    "name": "CSS",
                    "categoryId": 2,
                    "iconName": "vscode-icons:file-type-css",
                },
                {
                    "id": 3,
                    "name": "Javascript",
                    "categoryId": 2,
                    "iconName": "logos:javascript",
                },
                {
                    "id": 4,
                    "name": "Typescript",
                    "categoryId": 2,
                    "iconName": "vscode-icons:file-type-typescript-official",
                },
                {
                    "id": 5,
                    "name": "ReactJS",
                    "categoryId": 2,
                    "iconName": "logos:react",
                },
                {
                    "id": 6,
                    "name": "Next.js",
                    "categoryId": 2,
                    "iconName": "akar-icons:nextjs-fill",
                },
                {
                    "id": 7,
                    "name": "Python",
                    "categoryId": 2,
                    "iconName": "logos:python",
                },
                {
                    "id": 8,
                    "name": "Java",
                    "categoryId": 2,
                    "iconName": "logos:java",
                },
                {
                    "id": 9,
                    "name": "NodeJS",
                    "categoryId": 2,
                    "iconName": "logos:nodejs-icon",
                },
                {
                    "id": 10,
                    "name": "AdonisJS",
                    "categoryId": 2,
                    "iconName": "logos:adonisjs-icon",
                },
                {
                    "id": 11,
                    "name": "Sass",
                    "categoryId": 2,
                    "iconName": "logos:sass",
                },
                {
                    "id": 12,
                    "name": "TailwindCSS",
                    "categoryId": 2,
                    "iconName": "logos:tailwindcss-icon",
                },
                {
                    "id": 13,
                    "name": "Styled components",
                    "categoryId": 2,
                    "iconName": "vscode-icons:file-type-styled",
                },
                {
                    "id": 14,
                    "name": "ESLint",
                    "categoryId": 2,
                    "iconName": "logos:eslint",
                },
                {
                    "id": 15,
                    "name": "GraphQL",
                    "categoryId": 2,
                    "iconName": "logos:graphql",
                },
                {
                    "id": 16,
                    "name": "Jest",
                    "categoryId": 2,
                    "iconName": "vscode-icons:file-type-jest",
                },
                {
                    "id": 17,
                    "name": "Figma",
                    "categoryId": 1,
                    "iconName": "logos:figma",
                },
                {
                    "id": 18,
                    "name": "Framer",
                    "categoryId": 1,
                    "iconName": "cib:framer",
                },
                {
                    "id": 19,
                    "name": "GIMP",
                    "categoryId": 1,
                    "iconName": "simple-icons:gimp",
                },
                {
                    "id": 20,
                    "name": "MySQL",
                    "categoryId": 3,
                    "iconName": "logos:mysql",
                },
                {
                    "id": 21,
                    "name": "SQL Server",
                    "categoryId": 3,
                    "iconName": "simple-icons:microsoftsqlserver",
                },
                {
                    "id": 22,
                    "name": "SQLite",
                    "categoryId": 3,
                    "iconName": "logos:sqlite",
                },
                {
                    "id": 23,
                    "name": "Jenkins",
                    "categoryId": 4,
                    "iconName": "logos:jenkins",
                },
                {
                    "id": 24,
                    "name": "Git",
                    "categoryId": 4,
                    "iconName": "bi:git",
                },
                {
                    "id": 25,
                    "name": "PM2",
                    "categoryId": 4,
                    "iconName": "logos:pm2",
                },
                {
                    "id": 26,
                    "name": "SkynexUI",
                    "categoryId": 2,
                    "iconName": "vscode-icons:file-type-styled",
                },
                {
                    "id": 27,
                    "name": "Supabase",
                    "categoryId": 2,
                    "iconName": "logos:supabase-icon",
                },
                {
                    "id": 28,
                    "name": "Vercel",
                    "categoryId": 4,
                    "iconName": "logos:vercel",
                },
                {
                    "id": 29,
                    "name": "React Router",
                    "categoryId": 2,
                    "iconName": "logos:react-router",
                },
            ]
        ));

        const projects = [
            {
                "id": 1,
                "name": "Aluracord",
                "role": "fullstack",
                "duration": "",
                "imagePath": "/assets/images/aluracord.png",
                "imageAlt": "Imagem de um projeto realizado durante a Imersão React da Alura chamado Aluracord.",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                "goal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
                "repositoryLink": "https://github.com/erick-menezes/aluracord-game-community",
                "appLink": "https://game-community.vercel.app/",
                "technologyIds": [26, 6, 3, 27, 28],
            },
            {
                "id": 2,
                "name": "AluraQuiz",
                "role": "fullstack",
                "duration": "",
                "imagePath": "/assets/images/aluraQuiz.png",
                "imageAlt": "Imagem de um projeto realizado durante a Imersão React da Alura chamado AluraQuiz.",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                "goal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
                "repositoryLink": "https://github.com/erick-menezes/imersao_nextjs",
                "appLink": "https://gamequiz-alura.vercel.app/",
                "technologyIds": [26, 13, 28],
            },
            {
                "id": 3,
                "name": "Eriflix",
                "role": "fullstack",
                "duration": "",
                "imagePath": "/assets/images/eriflix.png",
                "imageAlt": "Imagem de um projeto realizado durante a Imersão React da Alura chamado Eriflix.",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                "goal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
                "repositoryLink": "https://github.com/erick-menezes/eriflix",
                "appLink": "https://eriflix.vercel.app/",
                "technologyIds": [28, 11, 13, 29],
            },
            {
                "id": 4,
                "name": "Check.it",
                "role": "fullstack",
                "duration": "",
                "imagePath": "/assets/images/checkit.png",
                "imageAlt": "Imagem de um projeto pessoal para listagem de compras chamado Check.it.",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                "goal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
                "repositoryLink": "https://github.com/erick-menezes/check.it",
                "appLink": "https://check-it-one.vercel.app/",
                "technologyIds": [6, 13, 4, 28],
            },
        ];

        this.get("/projects", () => (
            projects
        ));

        this.get("/projects/landing", () => {
            return projects.splice(0, 4);
        });

        this.namespace = "";
        this.passthrough();
    },
  });

  return server;
}
