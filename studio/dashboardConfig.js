export default {
  widgets: [
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
                  buildHookId: '6016e17ad7c90c50698fcb06',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-txz95rhg',
                  apiId: 'b74b48ec-c472-46f4-b3aa-642df33a4355'
                },
                {
                  buildHookId: '6016e17ad9325c43fe81cfae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cvui5qji',
                  apiId: '135eb991-3014-4cfe-9e83-f943a40b4031'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bstrulak/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cvui5qji.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
