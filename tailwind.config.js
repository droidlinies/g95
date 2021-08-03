module.exports = {
    
    purge: [
       // './src/**/*.html',
        
        //'./src/**/*.jsx',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                1: "url('../assets/1a.jpeg')",
                2: "url('../assets/2.jpeg')",
                3: "url('../assets/3.jpg')",
                4: "url('../assets/4.jpg')",
                5: "url('../assets/5.jpg')"
              },
              flex: {
                5: 5
              }
            }
        },
    
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}