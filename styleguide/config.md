# Styleguide options

### Head

    meta(name='viewport' content='user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1, minimal-ui')
    link(rel='stylesheet' href='./styleguide/styleguide.css')
    link(rel='stylesheet' href='./styleguide/custom-preview-elements.css')
    link(rel='stylesheet' href='./styleguide/global-footer.css')
    link(rel='stylesheet' href='./www/index.css')
    script(src='./styleguide/styleguide.js')

### Body

	div(style='height: 0; width: 0; position: absolute;') <!-- inject:svg --><!-- endinject -->
    h1 Wikia Design System
    div#styleguides(sg-content)
