import type { ParamMatcher } from "@sveltejs/kit";

export const match:ParamMatcher = (params) => {
  return params.split('/').length > 1
}