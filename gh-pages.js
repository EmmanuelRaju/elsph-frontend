import ghpages from 'gh-pages';

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'master',
        repo: 'https://github.com/EmmanuelRaju/elsph-frontend.git', // Update to point to your repository  
        user: {
            name: 'Emmanuel Raju', // update to use your name
            email: 'eraj007@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)