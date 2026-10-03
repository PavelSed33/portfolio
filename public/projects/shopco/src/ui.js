const paths={
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 cart:'<path d="M2 3h3l3 12h11l3-9H6"/><circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/>',
 menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
 trash:'<path d="M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7M14 10v7"/>',
 check:'<circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="m7 12 3 3 7-7" stroke="white"/>'
};
export function icon(name){return `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||''}</svg>`}
export function stars(rating){const percentage=Math.min(100,Math.max(0,Number(rating)||0)*20);return `<span class="star-rating" role="img" aria-label="${percentage/20} out of 5 stars"><span class="star-track" aria-hidden="true">★★★★★</span><span class="star-fill" aria-hidden="true" style="width:${percentage}%">★★★★★</span></span>`}
