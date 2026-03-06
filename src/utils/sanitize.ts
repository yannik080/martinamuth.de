import DOMPurify from 'dompurify';

/**
 * Sanitizes HTML using DOMPurify.
 *
 * NOTE: For SSR environments, consider using 'isomorphic-dompurify'.
 * Since this project is currently a Vite-based CSR app, DOMPurify works fine.
 *
 * @param html The HTML string to sanitize
 * @returns The sanitized HTML string
 */
export function sanitizeHtml(html: string): string {
    // Basic check for SSR context if the project ever adopts it.
    if (typeof window === 'undefined') {
        // In SSR without a library like 'isomorphic-dompurify',
        // return the original content or a safe fallback.
        // For now, we assume this is a CSR-only application.
        return html;
    }

    return DOMPurify.sanitize(html);
}
