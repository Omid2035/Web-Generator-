import { LitElement, html } from 'lit';
import { getTemplateData } from '../../utils/templates.js';
import { text, bg, border } from '../../templates/common/color.js';

export class Compare extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        const compareData = getTemplateData('compare');
        
        return html`
        <section class="min-h-[50vh] w-full p-4 md:p-8 relative grid place-items-center">
            <div class="absolute inset-0 -z-10">
                <div id="compare-image" class="w-full h-full bg-cover bg-center bg-no-repeat brightness-50" style="background-image: url('${compareData.backgroundImageUrl}');"></div>
            </div>

            <div class="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-3xl shadow-2xl overflow-hidden border ${border('gray', '200')}">
                <h1 class="text-xl md:text-2xl font-bold text-center p-4 md:p-6 bg-gray-50/80">${compareData.title}</h1>

                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="hidden sm:table-header-group">
                            <tr class="bg-gray-50/80">
                                <th class="px-4 py-3 text-left text-sm font-semibold ${text('gray', '900')} border-b">${compareData.tableHeaders.category}</th>
                                <th class="px-4 py-3 text-left text-sm font-semibold ${text('gray', '900')} border-b">${compareData.tableHeaders.traditional}</th>
                                <th class="px-4 py-3 text-left text-sm font-semibold ${text('gray', '600')} border-b">${compareData.tableHeaders.modern}</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            ${compareData.rows.map(row => html`
                                <tr class="hover:bg-gray-50/50 transition-colors duration-150 sm:table-row flex flex-col sm:flex-row border-b sm:border-0">
                                    <td class="p-4 sm:py-3 sm:align-middle w-full sm:w-auto border-b sm:border-b-0 ${bg('gray', '50')} sm:bg-transparent">
                                        <div class="font-semibold ${text('gray', '900')} sm:hidden">${compareData.tableHeaders.category}</div>
                                        <div class="mt-1 sm:mt-0">${row.category}</div>
                                    </td>
                                    <td class="p-4 sm:py-2 sm:align-middle w-full sm:w-auto border-b sm:border-b-0">
                                        <div class="font-semibold ${text('gray', '900')} sm:hidden">${compareData.tableHeaders.traditional}</div>
                                        <div class="mt-1 sm:mt-0 ${text('danger', '700')} font-medium">${row.traditional}</div>
                                    </td>
                                    <td class="p-4 sm:py-2 sm:align-middle w-full sm:w-auto">
                                        <div class="font-semibold ${text('gray', '900')} sm:hidden">${compareData.tableHeaders.modern}</div>
                                        <div class="mt-1 sm:mt-0 ${text('success', '500')}">${row.modern}</div>
                                    </td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('compare-section', Compare);