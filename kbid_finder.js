/*
Ensures that GUID-based Microsoft Support pages list the technical KBIDs.
Copyright (C) 2021  Valters Jansons

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

(() => {

    'use strict'

    let title = document.getElementsByClassName('ocpArticleTitleSection')[0]
    if (typeof title === 'undefined') {
        title = document.getElementsByTagName('h1')[0]
    }
    if (typeof title === 'undefined') {
        return
    }

    const kbid = Array.from(document.getElementsByTagName('meta'))
        .filter(meta => meta.getAttribute('name') === 'awa-kb_id')
        .map(meta => 'KB' + meta.getAttribute('content'))
        .filter(kbid => !title.textContent.includes(kbid))[0]

    if (typeof kbid === 'undefined') {
        return
    }

    if (title.tagName === 'H1') {
        title.textContent = kbid + ' - ' + title.textContent
    } else {
        const h2 = document.createElement('h2')
        h2.textContent = kbid

        // Generally we are trying to align to `.ocpArticleTitleSection h1` rules, so that the <h2> fits in nicely.
        h2.style['font-size'] = '2.8em' // based on `h2` rule!
        h2.style['line-height'] = '1.217'
        h2.style.color = '#767676' // based on `#supAppliesToList` rule!
        h2.style['font-family'] = "'Segoe UI Light','Segoe WP Light','wf_segoe-ui_light','wf_segoe-ui_normal','Segoe UI','Segoe WP',Helvetica,Tahoma,Arial,sans-serif"
        h2.style['font-style'] = 'italic' // based on `#supAppliesToList` rule!
        h2.style['font-weight'] = '300'
        h2.style['margin-top'] = '-9px' // based on `.supAppliesToSection` rule!
        h2.style['margin-bottom'] = '30px'

        title.append(h2)
    }

})()
