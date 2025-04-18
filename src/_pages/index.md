---
title: "I'm a longer and more academic (sub)title for the site"
description: "I'm a description for the site that shows up on the homepage specifically. I might have links to other parts of the website in a wiki-like way."
layout: "base"
home: true
---
<section class="px-6 py-24">
  <h2 class="mb-12 text-3xl">
    <div class="h-[1.5rem] aspect-square bg-amber-200 inline-block align-baseline"></div>
    I'm a sub heading for a gallery section
  </h2>
  <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
    {%- for i in (1..9) -%}
    <a href="">
      <div class="bg-white font-mono">
        <div>
          <div class="border-r border-b border-slate-400 text-slate-600 w-fit pr-2 mb-4">Item</div>
          <p class="leading-snug text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          <div class="aspect-square w-full border crossed my-6"></div>
        </div>
      </div>
    </a>
    {%- endfor -%}
  </div>
</section>

<section class="px-6 py-24">
  <div class="flex justify-center gap-6">
    <div class="basis-1/2">
      <div class="w-full aspect-3/2 border crossed"></div>
    </div>
    <div class="basis-1/2">
      <div class="text-xl py-6 max-w-[60ch]">
        <h2 class="mb-6 text-3xl">
          <div class="h-[1.5rem] aspect-square bg-amber-200 inline-block align-baseline"></div>
          I'm a sub heading for an exhibit section
        </h2>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
        </p>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. 
        </p>
        (<a class="link" href="#">See More</a>)
      </div>
    </div>
  </div>
</section>

<section class="px-6 py-24">
  <div class="flex justify-center gap-6">
    <div class="basis-1/2">
      <div class="text-xl py-6 max-w-[60ch] float-end">
        <h2 class="mb-6 text-3xl">
          <div class="h-[1.5rem] aspect-square bg-amber-200 inline-block align-baseline"></div>
          I'm a sub heading for another exhibit section
        </h2>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </p>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. 
        </p>
        (<a class="link" href="#">See More</a>)
      </div>
    </div>
    <div class="basis-1/2">
      <div class="border crossed  w-full aspect-4/3"></div>
    </div>
  </div>
</section>