export function keys<O>(o: O): (keyof O)[] {
  return Object.keys(o) as (keyof O)[];
}

export function parseQuery<T>(queryString: string): T {
  if (queryString !== '') {
    const query: any = {};
    const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');

    let i = 0;
    for (i; i < pairs.length; i += 1) {
      const pair = pairs[i].split('=');

      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }

    return query;
  }

  return {} as T;
}

export function getFilters(options: any): any {
  const optionKeys = Object.keys(options);
  let filters = ``;
  if (optionKeys.length > 0) {
    optionKeys.map((option: string) => {
      if (
        option in options &&
        ((Number.isInteger(options[option]) && options[option] > -1) || options[option].length)
      ) {
        if (!filters.length) {
          filters += `?${option}=${options[option]}`;
        } else {
          filters += `&${option}=${options[option]}`;
        }
      }
      return option;
    });
  }
  return filters;
}
