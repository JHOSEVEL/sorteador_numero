module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/style/main.css': 'src/style/main.less'
                }
            },
            prodution: {
                opitions: {
                    compress: true,
                },
                files: {
                    'dist/style/main.min.css': 'src/style/main.less'
                }
            }
        },
        watch: {
            less:{
                files:['src/style/**/*.less'],
                tasks: ['less:development']
            }
        },
        replace:{
            dev:{
                options:{
                    patterns:[
                        {
                            match: 'ender_do_css',
                            replacement: './style/main.css'
                        },
                        {
                            match: 'ender_do_js',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        scr: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            }
        }
       

    })

       
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.registerTask('default',['watch']);
    grunt.registerTask('build',['less:prodution']);
}
