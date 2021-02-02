export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6019256927a7756dd7b31b37',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-aocwcedg',
                  apiId: 'bf7faa70-ba49-4b9f-b6f1-8d5ecd5980cc'
                },
                {
                  buildHookId: '6019256a018af68a4418f6bf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fo48dprj',
                  apiId: 'ea38fe45-5d1a-480a-bd30-b919726f4215'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pwdrysdale/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fo48dprj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
