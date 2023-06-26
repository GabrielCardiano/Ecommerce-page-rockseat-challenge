import { FilterType } from "@/types/FilterTypes";
import { PriorityTypes } from "@/types/PriorityTypes";

export function getCategoryByType(type: FilterType) {
    if (type === FilterType.MUG) return 'mugs';
    if (type === FilterType.SHIRT) return 't-shirts';
    return ''
}

export function getFieldByPriority(priority: PriorityTypes) {
    if (priority === PriorityTypes.NEWS) return { field: "created_at", order: "ASC" }
    if (priority === PriorityTypes.HIGHEST_PRICE) return { field: "price_in_cents", order: "DSC" }
    if (priority === PriorityTypes.LOWEST_PRICE) return { field: "price_in_cents", order: "ASC" }

    return {field: "sales", order: "DSC"}
} 

export function mountQuery(type: FilterType, priority: PriorityTypes) {
    if (type === FilterType.ALL && priority === PriorityTypes.POPULARITY) return `query { 
        allProducts(sortField: "sales", sortOrder: "DSC") { 
          id 
          name 
          price_in_cents
          image_url
        }
      }
      `
    const sortSettings = getFieldByPriority(priority);
    const categoryFilter = getCategoryByType(type);
  
    return `query { 
        allProducts(
            sortField: "${sortSettings.field}", 
            sortOrder: "${sortSettings.order}",
            ${categoryFilter ? `filter: { category: "${categoryFilter }"}` : '' }) {
          id 
          name 
          price_in_cents
          image_url
        }
      }
      `
  }