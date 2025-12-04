const card = (images, title, description, keywords, link) => {
    return `
    <div class="group relative">
        <img src="${images}" alt="${title}"
            class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        
        <div class="mt-4 flex justify-between items-start gap-2">
            <div class="basis-3/4 min-w-0">
                <h3 class="text-sm text-gray-700 overflow-hidden text-ellipsis whitespace-nowrap">
                    <a href="${link}">
                        ${title}
                    </a>
                </h3>

                <p class="mt-1 text-sm text-gray-500 line-clamp-2 overflow-hidden clamp-2">
                    ${description}
                </p>
            </div>

            <!-- Keywords 25% -->
            <p class="basis-1/4 min-w-0 text-right text-sm font-medium text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap">
                ${keywords}
            </p>
        </div>
    </div>
    `;
}

export { card };
