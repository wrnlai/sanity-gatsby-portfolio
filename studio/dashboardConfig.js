export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624f449ff641b557aec0b6e2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rfiikizc',
                  apiId: '6998104a-ecb3-4d69-bd7e-fb2fde165782'
                },
                {
                  buildHookId: '624f449f33d7e74e21f399e8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1yj6zca7',
                  apiId: '2c01f0b1-04d8-4723-95e9-38114b331eb7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wrnlai/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1yj6zca7.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
