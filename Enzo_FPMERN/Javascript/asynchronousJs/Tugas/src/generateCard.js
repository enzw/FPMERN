const card = (images, title, description, keywords, link) => {
    return `
    <div class="group relative">
        <img src="${images}" alt="${title}"
            class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div class="mt-4 flex justify-between">
            <div>
                <h3 class="text-sm text-gray-700">
                    <a href="${link}" class="clamp-2">
                        <span aria-hidden="true" class=""></span>
                        ${title}
                    </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500 truncate clamp-2">${description}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">${keywords}</p>
        </div>
    </div>
    `;
}

export { card }