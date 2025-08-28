---
title: "I'm a Longer, More Academic Title or Maybe Even a Tagline for the Site"
description: "I'm a description for the site that shows up on the homepage specifically. I might have links to other parts of the website in a wiki-like way."
layout: "base"
---
{% include "site/intro" %}

{% include "grid/item-cards" heading:"I'm a sub heading for a gallery grid section" %}

{% include "feature/exhibit" heading:"I'm a sub heading for an exhibit section (#1)", link:"/exhibits/simple" tex-side:"right"%}

{% include "feature/exhibit" heading:"I'm a sub heading for another exhibit section (#2)", link:"/exhibits/side-by-side" text-side:"left"%}