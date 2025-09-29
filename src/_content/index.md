---
title: "I'm a Longer Title or Welcome Tagline for the Site"
description: "I'm a description for the site that shows up on the homepage specifically. I might have links to other parts of the website, e.g., to refer users to the [About](/about) and [Explore](/explore) pages."
layout: "base"
---

{% include "site/intro" img:'/media/testp.png' img_alt:'testing alt' img_caption:"I'm a caption for the image above!" img_link:'/about'%}

{% include "grid/item-cards" heading:"Collection Items" %}

{% include "feature/exhibit" heading:"I'm a sub heading for an exhibit section (#1)", link:"/exhibits/simple" tex-side:"right"%}

{% include "feature/exhibit" heading:"I'm a sub heading for another exhibit section (#2)", link:"/exhibits/side-by-side" text-side:"left"%}

{% include "feature/item" text:"lorem ipsum dolor sic amet" heading:"I'm a sub heading for a featured item", link:"/items/sample" text-side:"left"%}
