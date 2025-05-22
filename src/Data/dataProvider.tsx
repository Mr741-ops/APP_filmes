import {
  CreateParams,
  CreateResult,
  DataProvider,
  DeleteManyParams,
  DeleteManyResult,
  DeleteParams,
  DeleteResult,
  fetchUtils,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  Identifier,
  QueryFunctionContext,
  RaRecord,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
} from "react-admin";

const API_URL = "https://api.themoviedb.org/3";
const auth_key = import.meta.env.VITE_API_KEY;

const headers = new Headers({
  accept: "application/json",
  Authorization: `Bearer ${auth_key}`,
});

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    if (!params.pagination) {
      throw new Error("Pagination parameters are required");
    }

    const lang = localStorage.getItem("language") ?? "en";
    const { page } = params?.pagination;
    const query = params.filter?.query ?? "";

    const URL = `${API_URL}/${resource}?language=${lang}&page=${page}${query ? `&query=${query}` : ""}`;

    const { json } = await fetchUtils.fetchJson(URL, {
      method: "GET",
      headers,
    });
    return {
      data: json.results,
      total: json.total_results,
    };
  },

  getOne: function <RecordType extends RaRecord = any>(
    resource: string,
    params: GetOneParams<RecordType> & QueryFunctionContext,
  ): Promise<GetOneResult<RecordType>> {
    if (!params.id) {
      throw new Error("ID is required");
    }
    const lang = localStorage.getItem("language") ?? "en";
    const typeSuffix = params.meta?.type ? `/${params.meta.type}` : "";

    const response = fetchUtils
      .fetchJson(
        `${API_URL}/${resource}/${params.id}${typeSuffix}?language=${lang}`,
        {
          method: "GET",
          headers,
        },
      )
      .then(({ json }) => ({
        data: json,
      }));
    return response;
  },

  getMany: function <RecordType extends RaRecord = any>(
    resource: string,
    params: GetManyParams<RecordType> & QueryFunctionContext,
  ): Promise<GetManyResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
  getManyReference: function <RecordType extends RaRecord = any>(
    resource: string,
    params: GetManyReferenceParams & QueryFunctionContext,
  ): Promise<GetManyReferenceResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
  update: function <RecordType extends RaRecord = any>(
    resource: string,
    params: UpdateParams,
  ): Promise<UpdateResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
  updateMany: function <RecordType extends RaRecord = any>(
    resource: string,
    params: UpdateManyParams,
  ): Promise<UpdateManyResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
  create: function <
    RecordType extends Omit<RaRecord, "id"> = any,
    ResultRecordType extends RaRecord = RecordType & { id: Identifier },
  >(
    resource: string,
    params: CreateParams,
  ): Promise<CreateResult<ResultRecordType>> {
    throw new Error("Function not implemented.");
  },
  delete: function <RecordType extends RaRecord = any>(
    resource: string,
    params: DeleteParams<RecordType>,
  ): Promise<DeleteResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
  deleteMany: function <RecordType extends RaRecord = any>(
    resource: string,
    params: DeleteManyParams<RecordType>,
  ): Promise<DeleteManyResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
};

export default dataProvider;
