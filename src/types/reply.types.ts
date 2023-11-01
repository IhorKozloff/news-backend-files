import { IComment, ICommentDetails, ICommentsFilter } from "./comments.types";

export type NewReplyRequest = Pick<IComment, 'news_id' | 'parent_id' | 'text' | 'img_urls'>;
export type INewReply = NewReplyRequest & Pick<IComment, "user_name">;

export interface IGetReplyRequestParams {
    id: string;
}

export interface IGetReplyRequestQuery {
    parent_id: string
}

export interface IReplyFilter extends IGetReplyRequestQuery, ICommentsFilter {

}

export interface IReplyDetails extends ICommentDetails {

}