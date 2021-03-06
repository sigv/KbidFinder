# KB ID Finder

_Ensures that GUID-based Microsoft Support pages list the technical KBIDs._

[![Mozilla Add-on](https://img.shields.io/amo/v/kb-id-finder?style=flat-square)](https://addons.mozilla.org/en-US/firefox/addon/kb-id-finder/)
[![Edge Add-on](https://img.shields.io/badge/dynamic/json?style=flat-square&label=edge%20add-on&prefix=v&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Ffeiiceflkijlfijhhggblaccankhdppg)](https://microsoftedge.microsoft.com/addons/detail/feiiceflkijlfijhhggblaccankhdppg)

Historically, Microsoft included KB IDs in the Support pages' titles.

Now Microsoft is reworking their article structure and thought it would be a good idea to remove KB IDs from titles, and move them over to `<meta>` tags. Apparently, for them it is much nicer to work with GUIDs.

This simple extension reads the `<meta>` tags when a `support.microsoft.com` page is loaded, and adds the KB IDs listed to the article title section/title text.

## Icon

[Icon image](https://unsplash.com/photos/ZSBFoikEu_Q) originally by [Jon Tyson](https://unsplash.com/@jontyson) from [Unsplash](https://unsplash.com/).

[Unsplash License](https://unsplash.com/license) has a "do whatever you want" policy (so described by them), allowing download and both commercial and non-commercial purposes uses.
