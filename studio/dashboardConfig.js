export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61b71bc7903f082036daa4db',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vdj7n9j7',
                  apiId: '1e2a5f00-fe1a-41e8-b880-15afe41daefd'
                },
                {
                  buildHookId: '61b71bc7e5d4a63694f965a5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4hnha1v7',
                  apiId: '452de05a-2a94-453f-9025-07debc376846'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ambtmannetje/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4hnha1v7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
