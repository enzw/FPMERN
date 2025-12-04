const newsContainer = document.getElementById("news");

function card(img, title, date, category, desc) {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    col.innerHTML = `
        <div class="card rounded-4 shadow-sm h-100">
            <img src="${img || 'https://placehold.co/600x300'}" class="card-img-top" style="border-top-left-radius:0.9rem;border-top-right-radius:0.9rem;">
            <div class="card-body">
                <span class="badge bg-primary mb-2 rounded-pill px-3">${category || "General"}</span>
                <h5 class="card-title fw-bold py-3">${title || "Tanpa Judul"}</h5>
                <p class="text-muted mb-1"><i class="bi bi-calendar"></i> ${date}</p>
                <p class="card-text text-truncate-line">${desc || "Tidak ada deskripsi."}</p>
            </div>
        </div>
    `;

    newsContainer.appendChild(col);
}

export { card };
