import { isNumber } from '@sima/utils';
import type { Repository, SelectQueryBuilder } from 'typeorm';

import { InvalidError } from '@core/errors/InvalidError';

type GetRepositoryEntity<R> = R extends Repository<infer T> ? T : never;

interface PaginateOptions<R extends Repository<any>> {
  page: number;
  alias?: string;
  itemsPerPage: number;
  fag?(query: SelectQueryBuilder<R>): any;
}

interface PaginateReturnData<R extends Repository<any>> {
  count: number;
  pages: number;
  inPage: number;
  itemsInPage: number;
  itemsPerPage: number;
  items: GetRepositoryEntity<R>[];
}

export class PaginationHelper {
  public static async paginate<R extends Repository<any>>(
    respository: R,
    { fag, alias, itemsPerPage, page: insertedPage }: PaginateOptions<R>,
  ): Promise<PaginateReturnData<R>> {
    const invalidPageError = new InvalidError('A página inserida é inválida.', {
      code: 400,
    });

    if (!isNumber(insertedPage)) {
      throw invalidPageError;
    }

    const ceiledPage = Math.ceil(insertedPage);
    const page =
      Number.isSafeInteger(ceiledPage) && ceiledPage > 0 ? ceiledPage : 1;

    const skipDocuments = itemsPerPage * (page - 1);
    const documentsQuery = respository.createQueryBuilder(alias);

    await fag?.(documentsQuery);

    const count = await documentsQuery.getCount();
    const pages = Math.ceil(count / itemsPerPage) || 1;

    if (page > pages) {
      throw invalidPageError;
    }

    documentsQuery.skip(skipDocuments).take(itemsPerPage);

    const documents = await documentsQuery.getMany();
    const documentsCount = documents.length;

    return {
      count,
      pages,
      inPage: page,
      itemsInPage: documentsCount,
      itemsPerPage,
      items: documents,
    };
  }
}
