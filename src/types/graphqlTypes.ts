export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  __typename?: 'ContentfulAsset';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  localFile?: Maybe<File>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge';
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ContentfulId = 'contentful_id',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  FileUrl = 'file___url',
  FileDetailsSize = 'file___details___size',
  FileDetailsImageWidth = 'file___details___image___width',
  FileDetailsImageHeight = 'file___details___image___height',
  FileFileName = 'file___fileName',
  FileContentType = 'file___contentType',
  Title = 'title',
  Description = 'description',
  NodeLocale = 'node_locale',
  SysRevision = 'sys___revision',
  LocalFileSourceInstanceName = 'localFile___sourceInstanceName',
  LocalFileAbsolutePath = 'localFile___absolutePath',
  LocalFileRelativePath = 'localFile___relativePath',
  LocalFileExtension = 'localFile___extension',
  LocalFileSize = 'localFile___size',
  LocalFilePrettySize = 'localFile___prettySize',
  LocalFileModifiedTime = 'localFile___modifiedTime',
  LocalFileAccessTime = 'localFile___accessTime',
  LocalFileChangeTime = 'localFile___changeTime',
  LocalFileBirthTime = 'localFile___birthTime',
  LocalFileRoot = 'localFile___root',
  LocalFileDir = 'localFile___dir',
  LocalFileBase = 'localFile___base',
  LocalFileExt = 'localFile___ext',
  LocalFileName = 'localFile___name',
  LocalFileRelativeDirectory = 'localFile___relativeDirectory',
  LocalFileDev = 'localFile___dev',
  LocalFileMode = 'localFile___mode',
  LocalFileNlink = 'localFile___nlink',
  LocalFileUid = 'localFile___uid',
  LocalFileGid = 'localFile___gid',
  LocalFileRdev = 'localFile___rdev',
  LocalFileIno = 'localFile___ino',
  LocalFileAtimeMs = 'localFile___atimeMs',
  LocalFileMtimeMs = 'localFile___mtimeMs',
  LocalFileCtimeMs = 'localFile___ctimeMs',
  LocalFileAtime = 'localFile___atime',
  LocalFileMtime = 'localFile___mtime',
  LocalFileCtime = 'localFile___ctime',
  LocalFileBirthtime = 'localFile___birthtime',
  LocalFileBirthtimeMs = 'localFile___birthtimeMs',
  LocalFileBlksize = 'localFile___blksize',
  LocalFileBlocks = 'localFile___blocks',
  LocalFileUrl = 'localFile___url',
  LocalFileId = 'localFile___id',
  LocalFileParentId = 'localFile___parent___id',
  LocalFileParentParentId = 'localFile___parent___parent___id',
  LocalFileParentParentChildren = 'localFile___parent___parent___children',
  LocalFileParentChildren = 'localFile___parent___children',
  LocalFileParentChildrenId = 'localFile___parent___children___id',
  LocalFileParentChildrenChildren = 'localFile___parent___children___children',
  LocalFileParentInternalContent = 'localFile___parent___internal___content',
  LocalFileParentInternalContentDigest = 'localFile___parent___internal___contentDigest',
  LocalFileParentInternalDescription = 'localFile___parent___internal___description',
  LocalFileParentInternalFieldOwners = 'localFile___parent___internal___fieldOwners',
  LocalFileParentInternalIgnoreType = 'localFile___parent___internal___ignoreType',
  LocalFileParentInternalMediaType = 'localFile___parent___internal___mediaType',
  LocalFileParentInternalOwner = 'localFile___parent___internal___owner',
  LocalFileParentInternalType = 'localFile___parent___internal___type',
  LocalFileChildren = 'localFile___children',
  LocalFileChildrenId = 'localFile___children___id',
  LocalFileChildrenParentId = 'localFile___children___parent___id',
  LocalFileChildrenParentChildren = 'localFile___children___parent___children',
  LocalFileChildrenChildren = 'localFile___children___children',
  LocalFileChildrenChildrenId = 'localFile___children___children___id',
  LocalFileChildrenChildrenChildren = 'localFile___children___children___children',
  LocalFileChildrenInternalContent = 'localFile___children___internal___content',
  LocalFileChildrenInternalContentDigest = 'localFile___children___internal___contentDigest',
  LocalFileChildrenInternalDescription = 'localFile___children___internal___description',
  LocalFileChildrenInternalFieldOwners = 'localFile___children___internal___fieldOwners',
  LocalFileChildrenInternalIgnoreType = 'localFile___children___internal___ignoreType',
  LocalFileChildrenInternalMediaType = 'localFile___children___internal___mediaType',
  LocalFileChildrenInternalOwner = 'localFile___children___internal___owner',
  LocalFileChildrenInternalType = 'localFile___children___internal___type',
  LocalFileInternalContent = 'localFile___internal___content',
  LocalFileInternalContentDigest = 'localFile___internal___contentDigest',
  LocalFileInternalDescription = 'localFile___internal___description',
  LocalFileInternalFieldOwners = 'localFile___internal___fieldOwners',
  LocalFileInternalIgnoreType = 'localFile___internal___ignoreType',
  LocalFileInternalMediaType = 'localFile___internal___mediaType',
  LocalFileInternalOwner = 'localFile___internal___owner',
  LocalFileInternalType = 'localFile___internal___type',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  ResizeBase64 = 'resize___base64',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeSrc = 'resize___src',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio'
}

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile';
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails';
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  __typename?: 'ContentfulAssetSys';
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssigne = Node & {
  __typename?: 'ContentfulAssigne';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<ContentfulProject>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAssigneSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssigneCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssigneUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAssigneConnection = {
  __typename?: 'ContentfulAssigneConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssigneEdge>;
  nodes: Array<ContentfulAssigne>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssigneGroupConnection>;
};


export type ContentfulAssigneConnectionDistinctArgs = {
  field: ContentfulAssigneFieldsEnum;
};


export type ContentfulAssigneConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssigneFieldsEnum;
};

export type ContentfulAssigneEdge = {
  __typename?: 'ContentfulAssigneEdge';
  next?: Maybe<ContentfulAssigne>;
  node: ContentfulAssigne;
  previous?: Maybe<ContentfulAssigne>;
};

export enum ContentfulAssigneFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Project = 'project',
  ProjectId = 'project___id',
  ProjectParentId = 'project___parent___id',
  ProjectParentParentId = 'project___parent___parent___id',
  ProjectParentParentChildren = 'project___parent___parent___children',
  ProjectParentChildren = 'project___parent___children',
  ProjectParentChildrenId = 'project___parent___children___id',
  ProjectParentChildrenChildren = 'project___parent___children___children',
  ProjectParentInternalContent = 'project___parent___internal___content',
  ProjectParentInternalContentDigest = 'project___parent___internal___contentDigest',
  ProjectParentInternalDescription = 'project___parent___internal___description',
  ProjectParentInternalFieldOwners = 'project___parent___internal___fieldOwners',
  ProjectParentInternalIgnoreType = 'project___parent___internal___ignoreType',
  ProjectParentInternalMediaType = 'project___parent___internal___mediaType',
  ProjectParentInternalOwner = 'project___parent___internal___owner',
  ProjectParentInternalType = 'project___parent___internal___type',
  ProjectChildren = 'project___children',
  ProjectChildrenId = 'project___children___id',
  ProjectChildrenParentId = 'project___children___parent___id',
  ProjectChildrenParentChildren = 'project___children___parent___children',
  ProjectChildrenChildren = 'project___children___children',
  ProjectChildrenChildrenId = 'project___children___children___id',
  ProjectChildrenChildrenChildren = 'project___children___children___children',
  ProjectChildrenInternalContent = 'project___children___internal___content',
  ProjectChildrenInternalContentDigest = 'project___children___internal___contentDigest',
  ProjectChildrenInternalDescription = 'project___children___internal___description',
  ProjectChildrenInternalFieldOwners = 'project___children___internal___fieldOwners',
  ProjectChildrenInternalIgnoreType = 'project___children___internal___ignoreType',
  ProjectChildrenInternalMediaType = 'project___children___internal___mediaType',
  ProjectChildrenInternalOwner = 'project___children___internal___owner',
  ProjectChildrenInternalType = 'project___children___internal___type',
  ProjectInternalContent = 'project___internal___content',
  ProjectInternalContentDigest = 'project___internal___contentDigest',
  ProjectInternalDescription = 'project___internal___description',
  ProjectInternalFieldOwners = 'project___internal___fieldOwners',
  ProjectInternalIgnoreType = 'project___internal___ignoreType',
  ProjectInternalMediaType = 'project___internal___mediaType',
  ProjectInternalOwner = 'project___internal___owner',
  ProjectInternalType = 'project___internal___type',
  ProjectName = 'project___name',
  ProjectSlug = 'project___slug',
  ProjectStartDate = 'project___startDate',
  ProjectDuring = 'project___during',
  ProjectComment = 'project___comment',
  ProjectSiteUrl = 'project___siteUrl',
  ProjectSourceUrl = 'project___sourceUrl',
  ProjectMainImageId = 'project___mainImage___id',
  ProjectMainImageParentId = 'project___mainImage___parent___id',
  ProjectMainImageParentChildren = 'project___mainImage___parent___children',
  ProjectMainImageChildren = 'project___mainImage___children',
  ProjectMainImageChildrenId = 'project___mainImage___children___id',
  ProjectMainImageChildrenChildren = 'project___mainImage___children___children',
  ProjectMainImageInternalContent = 'project___mainImage___internal___content',
  ProjectMainImageInternalContentDigest = 'project___mainImage___internal___contentDigest',
  ProjectMainImageInternalDescription = 'project___mainImage___internal___description',
  ProjectMainImageInternalFieldOwners = 'project___mainImage___internal___fieldOwners',
  ProjectMainImageInternalIgnoreType = 'project___mainImage___internal___ignoreType',
  ProjectMainImageInternalMediaType = 'project___mainImage___internal___mediaType',
  ProjectMainImageInternalOwner = 'project___mainImage___internal___owner',
  ProjectMainImageInternalType = 'project___mainImage___internal___type',
  ProjectMainImageContentfulId = 'project___mainImage___contentful_id',
  ProjectMainImageSpaceId = 'project___mainImage___spaceId',
  ProjectMainImageCreatedAt = 'project___mainImage___createdAt',
  ProjectMainImageUpdatedAt = 'project___mainImage___updatedAt',
  ProjectMainImageFileUrl = 'project___mainImage___file___url',
  ProjectMainImageFileFileName = 'project___mainImage___file___fileName',
  ProjectMainImageFileContentType = 'project___mainImage___file___contentType',
  ProjectMainImageTitle = 'project___mainImage___title',
  ProjectMainImageDescription = 'project___mainImage___description',
  ProjectMainImageNodeLocale = 'project___mainImage___node_locale',
  ProjectMainImageSysRevision = 'project___mainImage___sys___revision',
  ProjectMainImageLocalFileSourceInstanceName = 'project___mainImage___localFile___sourceInstanceName',
  ProjectMainImageLocalFileAbsolutePath = 'project___mainImage___localFile___absolutePath',
  ProjectMainImageLocalFileRelativePath = 'project___mainImage___localFile___relativePath',
  ProjectMainImageLocalFileExtension = 'project___mainImage___localFile___extension',
  ProjectMainImageLocalFileSize = 'project___mainImage___localFile___size',
  ProjectMainImageLocalFilePrettySize = 'project___mainImage___localFile___prettySize',
  ProjectMainImageLocalFileModifiedTime = 'project___mainImage___localFile___modifiedTime',
  ProjectMainImageLocalFileAccessTime = 'project___mainImage___localFile___accessTime',
  ProjectMainImageLocalFileChangeTime = 'project___mainImage___localFile___changeTime',
  ProjectMainImageLocalFileBirthTime = 'project___mainImage___localFile___birthTime',
  ProjectMainImageLocalFileRoot = 'project___mainImage___localFile___root',
  ProjectMainImageLocalFileDir = 'project___mainImage___localFile___dir',
  ProjectMainImageLocalFileBase = 'project___mainImage___localFile___base',
  ProjectMainImageLocalFileExt = 'project___mainImage___localFile___ext',
  ProjectMainImageLocalFileName = 'project___mainImage___localFile___name',
  ProjectMainImageLocalFileRelativeDirectory = 'project___mainImage___localFile___relativeDirectory',
  ProjectMainImageLocalFileDev = 'project___mainImage___localFile___dev',
  ProjectMainImageLocalFileMode = 'project___mainImage___localFile___mode',
  ProjectMainImageLocalFileNlink = 'project___mainImage___localFile___nlink',
  ProjectMainImageLocalFileUid = 'project___mainImage___localFile___uid',
  ProjectMainImageLocalFileGid = 'project___mainImage___localFile___gid',
  ProjectMainImageLocalFileRdev = 'project___mainImage___localFile___rdev',
  ProjectMainImageLocalFileIno = 'project___mainImage___localFile___ino',
  ProjectMainImageLocalFileAtimeMs = 'project___mainImage___localFile___atimeMs',
  ProjectMainImageLocalFileMtimeMs = 'project___mainImage___localFile___mtimeMs',
  ProjectMainImageLocalFileCtimeMs = 'project___mainImage___localFile___ctimeMs',
  ProjectMainImageLocalFileAtime = 'project___mainImage___localFile___atime',
  ProjectMainImageLocalFileMtime = 'project___mainImage___localFile___mtime',
  ProjectMainImageLocalFileCtime = 'project___mainImage___localFile___ctime',
  ProjectMainImageLocalFileBirthtime = 'project___mainImage___localFile___birthtime',
  ProjectMainImageLocalFileBirthtimeMs = 'project___mainImage___localFile___birthtimeMs',
  ProjectMainImageLocalFileBlksize = 'project___mainImage___localFile___blksize',
  ProjectMainImageLocalFileBlocks = 'project___mainImage___localFile___blocks',
  ProjectMainImageLocalFileUrl = 'project___mainImage___localFile___url',
  ProjectMainImageLocalFileId = 'project___mainImage___localFile___id',
  ProjectMainImageLocalFileChildren = 'project___mainImage___localFile___children',
  ProjectMainImageFixedBase64 = 'project___mainImage___fixed___base64',
  ProjectMainImageFixedTracedSvg = 'project___mainImage___fixed___tracedSVG',
  ProjectMainImageFixedAspectRatio = 'project___mainImage___fixed___aspectRatio',
  ProjectMainImageFixedWidth = 'project___mainImage___fixed___width',
  ProjectMainImageFixedHeight = 'project___mainImage___fixed___height',
  ProjectMainImageFixedSrc = 'project___mainImage___fixed___src',
  ProjectMainImageFixedSrcSet = 'project___mainImage___fixed___srcSet',
  ProjectMainImageFixedSrcWebp = 'project___mainImage___fixed___srcWebp',
  ProjectMainImageFixedSrcSetWebp = 'project___mainImage___fixed___srcSetWebp',
  ProjectMainImageResolutionsBase64 = 'project___mainImage___resolutions___base64',
  ProjectMainImageResolutionsTracedSvg = 'project___mainImage___resolutions___tracedSVG',
  ProjectMainImageResolutionsAspectRatio = 'project___mainImage___resolutions___aspectRatio',
  ProjectMainImageResolutionsWidth = 'project___mainImage___resolutions___width',
  ProjectMainImageResolutionsHeight = 'project___mainImage___resolutions___height',
  ProjectMainImageResolutionsSrc = 'project___mainImage___resolutions___src',
  ProjectMainImageResolutionsSrcSet = 'project___mainImage___resolutions___srcSet',
  ProjectMainImageResolutionsSrcWebp = 'project___mainImage___resolutions___srcWebp',
  ProjectMainImageResolutionsSrcSetWebp = 'project___mainImage___resolutions___srcSetWebp',
  ProjectMainImageFluidBase64 = 'project___mainImage___fluid___base64',
  ProjectMainImageFluidTracedSvg = 'project___mainImage___fluid___tracedSVG',
  ProjectMainImageFluidAspectRatio = 'project___mainImage___fluid___aspectRatio',
  ProjectMainImageFluidSrc = 'project___mainImage___fluid___src',
  ProjectMainImageFluidSrcSet = 'project___mainImage___fluid___srcSet',
  ProjectMainImageFluidSrcWebp = 'project___mainImage___fluid___srcWebp',
  ProjectMainImageFluidSrcSetWebp = 'project___mainImage___fluid___srcSetWebp',
  ProjectMainImageFluidSizes = 'project___mainImage___fluid___sizes',
  ProjectMainImageSizesBase64 = 'project___mainImage___sizes___base64',
  ProjectMainImageSizesTracedSvg = 'project___mainImage___sizes___tracedSVG',
  ProjectMainImageSizesAspectRatio = 'project___mainImage___sizes___aspectRatio',
  ProjectMainImageSizesSrc = 'project___mainImage___sizes___src',
  ProjectMainImageSizesSrcSet = 'project___mainImage___sizes___srcSet',
  ProjectMainImageSizesSrcWebp = 'project___mainImage___sizes___srcWebp',
  ProjectMainImageSizesSrcSetWebp = 'project___mainImage___sizes___srcSetWebp',
  ProjectMainImageSizesSizes = 'project___mainImage___sizes___sizes',
  ProjectMainImageResizeBase64 = 'project___mainImage___resize___base64',
  ProjectMainImageResizeTracedSvg = 'project___mainImage___resize___tracedSVG',
  ProjectMainImageResizeSrc = 'project___mainImage___resize___src',
  ProjectMainImageResizeWidth = 'project___mainImage___resize___width',
  ProjectMainImageResizeHeight = 'project___mainImage___resize___height',
  ProjectMainImageResizeAspectRatio = 'project___mainImage___resize___aspectRatio',
  ProjectRole = 'project___role',
  ProjectRoleId = 'project___role___id',
  ProjectRoleParentId = 'project___role___parent___id',
  ProjectRoleParentChildren = 'project___role___parent___children',
  ProjectRoleChildren = 'project___role___children',
  ProjectRoleChildrenId = 'project___role___children___id',
  ProjectRoleChildrenChildren = 'project___role___children___children',
  ProjectRoleInternalContent = 'project___role___internal___content',
  ProjectRoleInternalContentDigest = 'project___role___internal___contentDigest',
  ProjectRoleInternalDescription = 'project___role___internal___description',
  ProjectRoleInternalFieldOwners = 'project___role___internal___fieldOwners',
  ProjectRoleInternalIgnoreType = 'project___role___internal___ignoreType',
  ProjectRoleInternalMediaType = 'project___role___internal___mediaType',
  ProjectRoleInternalOwner = 'project___role___internal___owner',
  ProjectRoleInternalType = 'project___role___internal___type',
  ProjectRoleName = 'project___role___name',
  ProjectRoleProject = 'project___role___project',
  ProjectRoleProjectId = 'project___role___project___id',
  ProjectRoleProjectChildren = 'project___role___project___children',
  ProjectRoleProjectName = 'project___role___project___name',
  ProjectRoleProjectSlug = 'project___role___project___slug',
  ProjectRoleProjectStartDate = 'project___role___project___startDate',
  ProjectRoleProjectDuring = 'project___role___project___during',
  ProjectRoleProjectComment = 'project___role___project___comment',
  ProjectRoleProjectSiteUrl = 'project___role___project___siteUrl',
  ProjectRoleProjectSourceUrl = 'project___role___project___sourceUrl',
  ProjectRoleProjectRole = 'project___role___project___role',
  ProjectRoleProjectAssigne = 'project___role___project___assigne',
  ProjectRoleProjectSystem = 'project___role___project___system',
  ProjectRoleProjectLanguage = 'project___role___project___language',
  ProjectRoleProjectTools = 'project___role___project___tools',
  ProjectRoleProjectSpaceId = 'project___role___project___spaceId',
  ProjectRoleProjectContentfulId = 'project___role___project___contentful_id',
  ProjectRoleProjectCreatedAt = 'project___role___project___createdAt',
  ProjectRoleProjectUpdatedAt = 'project___role___project___updatedAt',
  ProjectRoleProjectNodeLocale = 'project___role___project___node_locale',
  ProjectRoleSpaceId = 'project___role___spaceId',
  ProjectRoleContentfulId = 'project___role___contentful_id',
  ProjectRoleCreatedAt = 'project___role___createdAt',
  ProjectRoleUpdatedAt = 'project___role___updatedAt',
  ProjectRoleSysRevision = 'project___role___sys___revision',
  ProjectRoleNodeLocale = 'project___role___node_locale',
  ProjectAssigne = 'project___assigne',
  ProjectAssigneId = 'project___assigne___id',
  ProjectAssigneParentId = 'project___assigne___parent___id',
  ProjectAssigneParentChildren = 'project___assigne___parent___children',
  ProjectAssigneChildren = 'project___assigne___children',
  ProjectAssigneChildrenId = 'project___assigne___children___id',
  ProjectAssigneChildrenChildren = 'project___assigne___children___children',
  ProjectAssigneInternalContent = 'project___assigne___internal___content',
  ProjectAssigneInternalContentDigest = 'project___assigne___internal___contentDigest',
  ProjectAssigneInternalDescription = 'project___assigne___internal___description',
  ProjectAssigneInternalFieldOwners = 'project___assigne___internal___fieldOwners',
  ProjectAssigneInternalIgnoreType = 'project___assigne___internal___ignoreType',
  ProjectAssigneInternalMediaType = 'project___assigne___internal___mediaType',
  ProjectAssigneInternalOwner = 'project___assigne___internal___owner',
  ProjectAssigneInternalType = 'project___assigne___internal___type',
  ProjectAssigneName = 'project___assigne___name',
  ProjectAssigneProject = 'project___assigne___project',
  ProjectAssigneProjectId = 'project___assigne___project___id',
  ProjectAssigneProjectChildren = 'project___assigne___project___children',
  ProjectAssigneProjectName = 'project___assigne___project___name',
  ProjectAssigneProjectSlug = 'project___assigne___project___slug',
  ProjectAssigneProjectStartDate = 'project___assigne___project___startDate',
  ProjectAssigneProjectDuring = 'project___assigne___project___during',
  ProjectAssigneProjectComment = 'project___assigne___project___comment',
  ProjectAssigneProjectSiteUrl = 'project___assigne___project___siteUrl',
  ProjectAssigneProjectSourceUrl = 'project___assigne___project___sourceUrl',
  ProjectAssigneProjectRole = 'project___assigne___project___role',
  ProjectAssigneProjectAssigne = 'project___assigne___project___assigne',
  ProjectAssigneProjectSystem = 'project___assigne___project___system',
  ProjectAssigneProjectLanguage = 'project___assigne___project___language',
  ProjectAssigneProjectTools = 'project___assigne___project___tools',
  ProjectAssigneProjectSpaceId = 'project___assigne___project___spaceId',
  ProjectAssigneProjectContentfulId = 'project___assigne___project___contentful_id',
  ProjectAssigneProjectCreatedAt = 'project___assigne___project___createdAt',
  ProjectAssigneProjectUpdatedAt = 'project___assigne___project___updatedAt',
  ProjectAssigneProjectNodeLocale = 'project___assigne___project___node_locale',
  ProjectAssigneSpaceId = 'project___assigne___spaceId',
  ProjectAssigneContentfulId = 'project___assigne___contentful_id',
  ProjectAssigneCreatedAt = 'project___assigne___createdAt',
  ProjectAssigneUpdatedAt = 'project___assigne___updatedAt',
  ProjectAssigneSysRevision = 'project___assigne___sys___revision',
  ProjectAssigneNodeLocale = 'project___assigne___node_locale',
  ProjectSystem = 'project___system',
  ProjectSystemId = 'project___system___id',
  ProjectSystemParentId = 'project___system___parent___id',
  ProjectSystemParentChildren = 'project___system___parent___children',
  ProjectSystemChildren = 'project___system___children',
  ProjectSystemChildrenId = 'project___system___children___id',
  ProjectSystemChildrenChildren = 'project___system___children___children',
  ProjectSystemInternalContent = 'project___system___internal___content',
  ProjectSystemInternalContentDigest = 'project___system___internal___contentDigest',
  ProjectSystemInternalDescription = 'project___system___internal___description',
  ProjectSystemInternalFieldOwners = 'project___system___internal___fieldOwners',
  ProjectSystemInternalIgnoreType = 'project___system___internal___ignoreType',
  ProjectSystemInternalMediaType = 'project___system___internal___mediaType',
  ProjectSystemInternalOwner = 'project___system___internal___owner',
  ProjectSystemInternalType = 'project___system___internal___type',
  ProjectSystemName = 'project___system___name',
  ProjectSystemLevel = 'project___system___level',
  ProjectSystemProject = 'project___system___project',
  ProjectSystemProjectId = 'project___system___project___id',
  ProjectSystemProjectChildren = 'project___system___project___children',
  ProjectSystemProjectName = 'project___system___project___name',
  ProjectSystemProjectSlug = 'project___system___project___slug',
  ProjectSystemProjectStartDate = 'project___system___project___startDate',
  ProjectSystemProjectDuring = 'project___system___project___during',
  ProjectSystemProjectComment = 'project___system___project___comment',
  ProjectSystemProjectSiteUrl = 'project___system___project___siteUrl',
  ProjectSystemProjectSourceUrl = 'project___system___project___sourceUrl',
  ProjectSystemProjectRole = 'project___system___project___role',
  ProjectSystemProjectAssigne = 'project___system___project___assigne',
  ProjectSystemProjectSystem = 'project___system___project___system',
  ProjectSystemProjectLanguage = 'project___system___project___language',
  ProjectSystemProjectTools = 'project___system___project___tools',
  ProjectSystemProjectSpaceId = 'project___system___project___spaceId',
  ProjectSystemProjectContentfulId = 'project___system___project___contentful_id',
  ProjectSystemProjectCreatedAt = 'project___system___project___createdAt',
  ProjectSystemProjectUpdatedAt = 'project___system___project___updatedAt',
  ProjectSystemProjectNodeLocale = 'project___system___project___node_locale',
  ProjectSystemSpaceId = 'project___system___spaceId',
  ProjectSystemContentfulId = 'project___system___contentful_id',
  ProjectSystemCreatedAt = 'project___system___createdAt',
  ProjectSystemUpdatedAt = 'project___system___updatedAt',
  ProjectSystemSysRevision = 'project___system___sys___revision',
  ProjectSystemNodeLocale = 'project___system___node_locale',
  ProjectSystemSkillmap = 'project___system___skillmap',
  ProjectSystemSkillmapId = 'project___system___skillmap___id',
  ProjectSystemSkillmapChildren = 'project___system___skillmap___children',
  ProjectSystemSkillmapName = 'project___system___skillmap___name',
  ProjectSystemSkillmapSkills = 'project___system___skillmap___skills',
  ProjectSystemSkillmapSpaceId = 'project___system___skillmap___spaceId',
  ProjectSystemSkillmapContentfulId = 'project___system___skillmap___contentful_id',
  ProjectSystemSkillmapCreatedAt = 'project___system___skillmap___createdAt',
  ProjectSystemSkillmapUpdatedAt = 'project___system___skillmap___updatedAt',
  ProjectSystemSkillmapNodeLocale = 'project___system___skillmap___node_locale',
  ProjectLanguage = 'project___language',
  ProjectLanguageId = 'project___language___id',
  ProjectLanguageParentId = 'project___language___parent___id',
  ProjectLanguageParentChildren = 'project___language___parent___children',
  ProjectLanguageChildren = 'project___language___children',
  ProjectLanguageChildrenId = 'project___language___children___id',
  ProjectLanguageChildrenChildren = 'project___language___children___children',
  ProjectLanguageInternalContent = 'project___language___internal___content',
  ProjectLanguageInternalContentDigest = 'project___language___internal___contentDigest',
  ProjectLanguageInternalDescription = 'project___language___internal___description',
  ProjectLanguageInternalFieldOwners = 'project___language___internal___fieldOwners',
  ProjectLanguageInternalIgnoreType = 'project___language___internal___ignoreType',
  ProjectLanguageInternalMediaType = 'project___language___internal___mediaType',
  ProjectLanguageInternalOwner = 'project___language___internal___owner',
  ProjectLanguageInternalType = 'project___language___internal___type',
  ProjectLanguageName = 'project___language___name',
  ProjectLanguageLevel = 'project___language___level',
  ProjectLanguageProject = 'project___language___project',
  ProjectLanguageProjectId = 'project___language___project___id',
  ProjectLanguageProjectChildren = 'project___language___project___children',
  ProjectLanguageProjectName = 'project___language___project___name',
  ProjectLanguageProjectSlug = 'project___language___project___slug',
  ProjectLanguageProjectStartDate = 'project___language___project___startDate',
  ProjectLanguageProjectDuring = 'project___language___project___during',
  ProjectLanguageProjectComment = 'project___language___project___comment',
  ProjectLanguageProjectSiteUrl = 'project___language___project___siteUrl',
  ProjectLanguageProjectSourceUrl = 'project___language___project___sourceUrl',
  ProjectLanguageProjectRole = 'project___language___project___role',
  ProjectLanguageProjectAssigne = 'project___language___project___assigne',
  ProjectLanguageProjectSystem = 'project___language___project___system',
  ProjectLanguageProjectLanguage = 'project___language___project___language',
  ProjectLanguageProjectTools = 'project___language___project___tools',
  ProjectLanguageProjectSpaceId = 'project___language___project___spaceId',
  ProjectLanguageProjectContentfulId = 'project___language___project___contentful_id',
  ProjectLanguageProjectCreatedAt = 'project___language___project___createdAt',
  ProjectLanguageProjectUpdatedAt = 'project___language___project___updatedAt',
  ProjectLanguageProjectNodeLocale = 'project___language___project___node_locale',
  ProjectLanguageSpaceId = 'project___language___spaceId',
  ProjectLanguageContentfulId = 'project___language___contentful_id',
  ProjectLanguageCreatedAt = 'project___language___createdAt',
  ProjectLanguageUpdatedAt = 'project___language___updatedAt',
  ProjectLanguageSysRevision = 'project___language___sys___revision',
  ProjectLanguageNodeLocale = 'project___language___node_locale',
  ProjectLanguageSkillmap = 'project___language___skillmap',
  ProjectLanguageSkillmapId = 'project___language___skillmap___id',
  ProjectLanguageSkillmapChildren = 'project___language___skillmap___children',
  ProjectLanguageSkillmapName = 'project___language___skillmap___name',
  ProjectLanguageSkillmapSkills = 'project___language___skillmap___skills',
  ProjectLanguageSkillmapSpaceId = 'project___language___skillmap___spaceId',
  ProjectLanguageSkillmapContentfulId = 'project___language___skillmap___contentful_id',
  ProjectLanguageSkillmapCreatedAt = 'project___language___skillmap___createdAt',
  ProjectLanguageSkillmapUpdatedAt = 'project___language___skillmap___updatedAt',
  ProjectLanguageSkillmapNodeLocale = 'project___language___skillmap___node_locale',
  ProjectTools = 'project___tools',
  ProjectToolsId = 'project___tools___id',
  ProjectToolsParentId = 'project___tools___parent___id',
  ProjectToolsParentChildren = 'project___tools___parent___children',
  ProjectToolsChildren = 'project___tools___children',
  ProjectToolsChildrenId = 'project___tools___children___id',
  ProjectToolsChildrenChildren = 'project___tools___children___children',
  ProjectToolsInternalContent = 'project___tools___internal___content',
  ProjectToolsInternalContentDigest = 'project___tools___internal___contentDigest',
  ProjectToolsInternalDescription = 'project___tools___internal___description',
  ProjectToolsInternalFieldOwners = 'project___tools___internal___fieldOwners',
  ProjectToolsInternalIgnoreType = 'project___tools___internal___ignoreType',
  ProjectToolsInternalMediaType = 'project___tools___internal___mediaType',
  ProjectToolsInternalOwner = 'project___tools___internal___owner',
  ProjectToolsInternalType = 'project___tools___internal___type',
  ProjectToolsName = 'project___tools___name',
  ProjectToolsLevel = 'project___tools___level',
  ProjectToolsProject = 'project___tools___project',
  ProjectToolsProjectId = 'project___tools___project___id',
  ProjectToolsProjectChildren = 'project___tools___project___children',
  ProjectToolsProjectName = 'project___tools___project___name',
  ProjectToolsProjectSlug = 'project___tools___project___slug',
  ProjectToolsProjectStartDate = 'project___tools___project___startDate',
  ProjectToolsProjectDuring = 'project___tools___project___during',
  ProjectToolsProjectComment = 'project___tools___project___comment',
  ProjectToolsProjectSiteUrl = 'project___tools___project___siteUrl',
  ProjectToolsProjectSourceUrl = 'project___tools___project___sourceUrl',
  ProjectToolsProjectRole = 'project___tools___project___role',
  ProjectToolsProjectAssigne = 'project___tools___project___assigne',
  ProjectToolsProjectSystem = 'project___tools___project___system',
  ProjectToolsProjectLanguage = 'project___tools___project___language',
  ProjectToolsProjectTools = 'project___tools___project___tools',
  ProjectToolsProjectSpaceId = 'project___tools___project___spaceId',
  ProjectToolsProjectContentfulId = 'project___tools___project___contentful_id',
  ProjectToolsProjectCreatedAt = 'project___tools___project___createdAt',
  ProjectToolsProjectUpdatedAt = 'project___tools___project___updatedAt',
  ProjectToolsProjectNodeLocale = 'project___tools___project___node_locale',
  ProjectToolsSpaceId = 'project___tools___spaceId',
  ProjectToolsContentfulId = 'project___tools___contentful_id',
  ProjectToolsCreatedAt = 'project___tools___createdAt',
  ProjectToolsUpdatedAt = 'project___tools___updatedAt',
  ProjectToolsSysRevision = 'project___tools___sys___revision',
  ProjectToolsNodeLocale = 'project___tools___node_locale',
  ProjectToolsSkillmap = 'project___tools___skillmap',
  ProjectToolsSkillmapId = 'project___tools___skillmap___id',
  ProjectToolsSkillmapChildren = 'project___tools___skillmap___children',
  ProjectToolsSkillmapName = 'project___tools___skillmap___name',
  ProjectToolsSkillmapSkills = 'project___tools___skillmap___skills',
  ProjectToolsSkillmapSpaceId = 'project___tools___skillmap___spaceId',
  ProjectToolsSkillmapContentfulId = 'project___tools___skillmap___contentful_id',
  ProjectToolsSkillmapCreatedAt = 'project___tools___skillmap___createdAt',
  ProjectToolsSkillmapUpdatedAt = 'project___tools___skillmap___updatedAt',
  ProjectToolsSkillmapNodeLocale = 'project___tools___skillmap___node_locale',
  ProjectSpaceId = 'project___spaceId',
  ProjectContentfulId = 'project___contentful_id',
  ProjectCreatedAt = 'project___createdAt',
  ProjectUpdatedAt = 'project___updatedAt',
  ProjectSysRevision = 'project___sys___revision',
  ProjectNodeLocale = 'project___node_locale',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale'
}

export type ContentfulAssigneFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAssigneSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssigneFilterListInput = {
  elemMatch?: Maybe<ContentfulAssigneFilterInput>;
};

export type ContentfulAssigneGroupConnection = {
  __typename?: 'ContentfulAssigneGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssigneEdge>;
  nodes: Array<ContentfulAssigne>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssigneSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssigneFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssigneSys = {
  __typename?: 'ContentfulAssigneSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAssigneSysContentType>;
};

export type ContentfulAssigneSysContentType = {
  __typename?: 'ContentfulAssigneSysContentType';
  sys?: Maybe<ContentfulAssigneSysContentTypeSys>;
};

export type ContentfulAssigneSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAssigneSysContentTypeSysFilterInput>;
};

export type ContentfulAssigneSysContentTypeSys = {
  __typename?: 'ContentfulAssigneSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulAssigneSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssigneSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAssigneSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge';
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  DisplayField = 'displayField',
  Description = 'description'
}

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  __typename?: 'ContentfulFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  __typename?: 'ContentfulFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export enum ContentfulImageCropFocus {
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT',
  Bottom = 'BOTTOM',
  BottomRight = 'BOTTOM_RIGHT',
  BottomLeft = 'BOTTOM_LEFT',
  Right = 'RIGHT',
  Left = 'LEFT',
  Face = 'FACE',
  Faces = 'FACES',
  Center = 'CENTER'
}

export enum ContentfulImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ContentfulProject = Node & {
  __typename?: 'ContentfulProject';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  during?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  mainImage?: Maybe<ContentfulAsset>;
  role?: Maybe<Array<Maybe<ContentfulRole>>>;
  assigne?: Maybe<Array<Maybe<ContentfulAssigne>>>;
  system?: Maybe<Array<Maybe<ContentfulSkill>>>;
  language?: Maybe<Array<Maybe<ContentfulSkill>>>;
  tools?: Maybe<Array<Maybe<ContentfulSkill>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulProjectSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulProjectConnection = {
  __typename?: 'ContentfulProjectConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProjectGroupConnection>;
};


export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectEdge = {
  __typename?: 'ContentfulProjectEdge';
  next?: Maybe<ContentfulProject>;
  node: ContentfulProject;
  previous?: Maybe<ContentfulProject>;
};

export enum ContentfulProjectFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Slug = 'slug',
  StartDate = 'startDate',
  During = 'during',
  Comment = 'comment',
  SiteUrl = 'siteUrl',
  SourceUrl = 'sourceUrl',
  MainImageId = 'mainImage___id',
  MainImageParentId = 'mainImage___parent___id',
  MainImageParentParentId = 'mainImage___parent___parent___id',
  MainImageParentParentChildren = 'mainImage___parent___parent___children',
  MainImageParentChildren = 'mainImage___parent___children',
  MainImageParentChildrenId = 'mainImage___parent___children___id',
  MainImageParentChildrenChildren = 'mainImage___parent___children___children',
  MainImageParentInternalContent = 'mainImage___parent___internal___content',
  MainImageParentInternalContentDigest = 'mainImage___parent___internal___contentDigest',
  MainImageParentInternalDescription = 'mainImage___parent___internal___description',
  MainImageParentInternalFieldOwners = 'mainImage___parent___internal___fieldOwners',
  MainImageParentInternalIgnoreType = 'mainImage___parent___internal___ignoreType',
  MainImageParentInternalMediaType = 'mainImage___parent___internal___mediaType',
  MainImageParentInternalOwner = 'mainImage___parent___internal___owner',
  MainImageParentInternalType = 'mainImage___parent___internal___type',
  MainImageChildren = 'mainImage___children',
  MainImageChildrenId = 'mainImage___children___id',
  MainImageChildrenParentId = 'mainImage___children___parent___id',
  MainImageChildrenParentChildren = 'mainImage___children___parent___children',
  MainImageChildrenChildren = 'mainImage___children___children',
  MainImageChildrenChildrenId = 'mainImage___children___children___id',
  MainImageChildrenChildrenChildren = 'mainImage___children___children___children',
  MainImageChildrenInternalContent = 'mainImage___children___internal___content',
  MainImageChildrenInternalContentDigest = 'mainImage___children___internal___contentDigest',
  MainImageChildrenInternalDescription = 'mainImage___children___internal___description',
  MainImageChildrenInternalFieldOwners = 'mainImage___children___internal___fieldOwners',
  MainImageChildrenInternalIgnoreType = 'mainImage___children___internal___ignoreType',
  MainImageChildrenInternalMediaType = 'mainImage___children___internal___mediaType',
  MainImageChildrenInternalOwner = 'mainImage___children___internal___owner',
  MainImageChildrenInternalType = 'mainImage___children___internal___type',
  MainImageInternalContent = 'mainImage___internal___content',
  MainImageInternalContentDigest = 'mainImage___internal___contentDigest',
  MainImageInternalDescription = 'mainImage___internal___description',
  MainImageInternalFieldOwners = 'mainImage___internal___fieldOwners',
  MainImageInternalIgnoreType = 'mainImage___internal___ignoreType',
  MainImageInternalMediaType = 'mainImage___internal___mediaType',
  MainImageInternalOwner = 'mainImage___internal___owner',
  MainImageInternalType = 'mainImage___internal___type',
  MainImageContentfulId = 'mainImage___contentful_id',
  MainImageSpaceId = 'mainImage___spaceId',
  MainImageCreatedAt = 'mainImage___createdAt',
  MainImageUpdatedAt = 'mainImage___updatedAt',
  MainImageFileUrl = 'mainImage___file___url',
  MainImageFileDetailsSize = 'mainImage___file___details___size',
  MainImageFileFileName = 'mainImage___file___fileName',
  MainImageFileContentType = 'mainImage___file___contentType',
  MainImageTitle = 'mainImage___title',
  MainImageDescription = 'mainImage___description',
  MainImageNodeLocale = 'mainImage___node_locale',
  MainImageSysRevision = 'mainImage___sys___revision',
  MainImageLocalFileSourceInstanceName = 'mainImage___localFile___sourceInstanceName',
  MainImageLocalFileAbsolutePath = 'mainImage___localFile___absolutePath',
  MainImageLocalFileRelativePath = 'mainImage___localFile___relativePath',
  MainImageLocalFileExtension = 'mainImage___localFile___extension',
  MainImageLocalFileSize = 'mainImage___localFile___size',
  MainImageLocalFilePrettySize = 'mainImage___localFile___prettySize',
  MainImageLocalFileModifiedTime = 'mainImage___localFile___modifiedTime',
  MainImageLocalFileAccessTime = 'mainImage___localFile___accessTime',
  MainImageLocalFileChangeTime = 'mainImage___localFile___changeTime',
  MainImageLocalFileBirthTime = 'mainImage___localFile___birthTime',
  MainImageLocalFileRoot = 'mainImage___localFile___root',
  MainImageLocalFileDir = 'mainImage___localFile___dir',
  MainImageLocalFileBase = 'mainImage___localFile___base',
  MainImageLocalFileExt = 'mainImage___localFile___ext',
  MainImageLocalFileName = 'mainImage___localFile___name',
  MainImageLocalFileRelativeDirectory = 'mainImage___localFile___relativeDirectory',
  MainImageLocalFileDev = 'mainImage___localFile___dev',
  MainImageLocalFileMode = 'mainImage___localFile___mode',
  MainImageLocalFileNlink = 'mainImage___localFile___nlink',
  MainImageLocalFileUid = 'mainImage___localFile___uid',
  MainImageLocalFileGid = 'mainImage___localFile___gid',
  MainImageLocalFileRdev = 'mainImage___localFile___rdev',
  MainImageLocalFileIno = 'mainImage___localFile___ino',
  MainImageLocalFileAtimeMs = 'mainImage___localFile___atimeMs',
  MainImageLocalFileMtimeMs = 'mainImage___localFile___mtimeMs',
  MainImageLocalFileCtimeMs = 'mainImage___localFile___ctimeMs',
  MainImageLocalFileAtime = 'mainImage___localFile___atime',
  MainImageLocalFileMtime = 'mainImage___localFile___mtime',
  MainImageLocalFileCtime = 'mainImage___localFile___ctime',
  MainImageLocalFileBirthtime = 'mainImage___localFile___birthtime',
  MainImageLocalFileBirthtimeMs = 'mainImage___localFile___birthtimeMs',
  MainImageLocalFileBlksize = 'mainImage___localFile___blksize',
  MainImageLocalFileBlocks = 'mainImage___localFile___blocks',
  MainImageLocalFileUrl = 'mainImage___localFile___url',
  MainImageLocalFileId = 'mainImage___localFile___id',
  MainImageLocalFileParentId = 'mainImage___localFile___parent___id',
  MainImageLocalFileParentChildren = 'mainImage___localFile___parent___children',
  MainImageLocalFileChildren = 'mainImage___localFile___children',
  MainImageLocalFileChildrenId = 'mainImage___localFile___children___id',
  MainImageLocalFileChildrenChildren = 'mainImage___localFile___children___children',
  MainImageLocalFileInternalContent = 'mainImage___localFile___internal___content',
  MainImageLocalFileInternalContentDigest = 'mainImage___localFile___internal___contentDigest',
  MainImageLocalFileInternalDescription = 'mainImage___localFile___internal___description',
  MainImageLocalFileInternalFieldOwners = 'mainImage___localFile___internal___fieldOwners',
  MainImageLocalFileInternalIgnoreType = 'mainImage___localFile___internal___ignoreType',
  MainImageLocalFileInternalMediaType = 'mainImage___localFile___internal___mediaType',
  MainImageLocalFileInternalOwner = 'mainImage___localFile___internal___owner',
  MainImageLocalFileInternalType = 'mainImage___localFile___internal___type',
  MainImageFixedBase64 = 'mainImage___fixed___base64',
  MainImageFixedTracedSvg = 'mainImage___fixed___tracedSVG',
  MainImageFixedAspectRatio = 'mainImage___fixed___aspectRatio',
  MainImageFixedWidth = 'mainImage___fixed___width',
  MainImageFixedHeight = 'mainImage___fixed___height',
  MainImageFixedSrc = 'mainImage___fixed___src',
  MainImageFixedSrcSet = 'mainImage___fixed___srcSet',
  MainImageFixedSrcWebp = 'mainImage___fixed___srcWebp',
  MainImageFixedSrcSetWebp = 'mainImage___fixed___srcSetWebp',
  MainImageResolutionsBase64 = 'mainImage___resolutions___base64',
  MainImageResolutionsTracedSvg = 'mainImage___resolutions___tracedSVG',
  MainImageResolutionsAspectRatio = 'mainImage___resolutions___aspectRatio',
  MainImageResolutionsWidth = 'mainImage___resolutions___width',
  MainImageResolutionsHeight = 'mainImage___resolutions___height',
  MainImageResolutionsSrc = 'mainImage___resolutions___src',
  MainImageResolutionsSrcSet = 'mainImage___resolutions___srcSet',
  MainImageResolutionsSrcWebp = 'mainImage___resolutions___srcWebp',
  MainImageResolutionsSrcSetWebp = 'mainImage___resolutions___srcSetWebp',
  MainImageFluidBase64 = 'mainImage___fluid___base64',
  MainImageFluidTracedSvg = 'mainImage___fluid___tracedSVG',
  MainImageFluidAspectRatio = 'mainImage___fluid___aspectRatio',
  MainImageFluidSrc = 'mainImage___fluid___src',
  MainImageFluidSrcSet = 'mainImage___fluid___srcSet',
  MainImageFluidSrcWebp = 'mainImage___fluid___srcWebp',
  MainImageFluidSrcSetWebp = 'mainImage___fluid___srcSetWebp',
  MainImageFluidSizes = 'mainImage___fluid___sizes',
  MainImageSizesBase64 = 'mainImage___sizes___base64',
  MainImageSizesTracedSvg = 'mainImage___sizes___tracedSVG',
  MainImageSizesAspectRatio = 'mainImage___sizes___aspectRatio',
  MainImageSizesSrc = 'mainImage___sizes___src',
  MainImageSizesSrcSet = 'mainImage___sizes___srcSet',
  MainImageSizesSrcWebp = 'mainImage___sizes___srcWebp',
  MainImageSizesSrcSetWebp = 'mainImage___sizes___srcSetWebp',
  MainImageSizesSizes = 'mainImage___sizes___sizes',
  MainImageResizeBase64 = 'mainImage___resize___base64',
  MainImageResizeTracedSvg = 'mainImage___resize___tracedSVG',
  MainImageResizeSrc = 'mainImage___resize___src',
  MainImageResizeWidth = 'mainImage___resize___width',
  MainImageResizeHeight = 'mainImage___resize___height',
  MainImageResizeAspectRatio = 'mainImage___resize___aspectRatio',
  Role = 'role',
  RoleId = 'role___id',
  RoleParentId = 'role___parent___id',
  RoleParentParentId = 'role___parent___parent___id',
  RoleParentParentChildren = 'role___parent___parent___children',
  RoleParentChildren = 'role___parent___children',
  RoleParentChildrenId = 'role___parent___children___id',
  RoleParentChildrenChildren = 'role___parent___children___children',
  RoleParentInternalContent = 'role___parent___internal___content',
  RoleParentInternalContentDigest = 'role___parent___internal___contentDigest',
  RoleParentInternalDescription = 'role___parent___internal___description',
  RoleParentInternalFieldOwners = 'role___parent___internal___fieldOwners',
  RoleParentInternalIgnoreType = 'role___parent___internal___ignoreType',
  RoleParentInternalMediaType = 'role___parent___internal___mediaType',
  RoleParentInternalOwner = 'role___parent___internal___owner',
  RoleParentInternalType = 'role___parent___internal___type',
  RoleChildren = 'role___children',
  RoleChildrenId = 'role___children___id',
  RoleChildrenParentId = 'role___children___parent___id',
  RoleChildrenParentChildren = 'role___children___parent___children',
  RoleChildrenChildren = 'role___children___children',
  RoleChildrenChildrenId = 'role___children___children___id',
  RoleChildrenChildrenChildren = 'role___children___children___children',
  RoleChildrenInternalContent = 'role___children___internal___content',
  RoleChildrenInternalContentDigest = 'role___children___internal___contentDigest',
  RoleChildrenInternalDescription = 'role___children___internal___description',
  RoleChildrenInternalFieldOwners = 'role___children___internal___fieldOwners',
  RoleChildrenInternalIgnoreType = 'role___children___internal___ignoreType',
  RoleChildrenInternalMediaType = 'role___children___internal___mediaType',
  RoleChildrenInternalOwner = 'role___children___internal___owner',
  RoleChildrenInternalType = 'role___children___internal___type',
  RoleInternalContent = 'role___internal___content',
  RoleInternalContentDigest = 'role___internal___contentDigest',
  RoleInternalDescription = 'role___internal___description',
  RoleInternalFieldOwners = 'role___internal___fieldOwners',
  RoleInternalIgnoreType = 'role___internal___ignoreType',
  RoleInternalMediaType = 'role___internal___mediaType',
  RoleInternalOwner = 'role___internal___owner',
  RoleInternalType = 'role___internal___type',
  RoleName = 'role___name',
  RoleProject = 'role___project',
  RoleProjectId = 'role___project___id',
  RoleProjectParentId = 'role___project___parent___id',
  RoleProjectParentChildren = 'role___project___parent___children',
  RoleProjectChildren = 'role___project___children',
  RoleProjectChildrenId = 'role___project___children___id',
  RoleProjectChildrenChildren = 'role___project___children___children',
  RoleProjectInternalContent = 'role___project___internal___content',
  RoleProjectInternalContentDigest = 'role___project___internal___contentDigest',
  RoleProjectInternalDescription = 'role___project___internal___description',
  RoleProjectInternalFieldOwners = 'role___project___internal___fieldOwners',
  RoleProjectInternalIgnoreType = 'role___project___internal___ignoreType',
  RoleProjectInternalMediaType = 'role___project___internal___mediaType',
  RoleProjectInternalOwner = 'role___project___internal___owner',
  RoleProjectInternalType = 'role___project___internal___type',
  RoleProjectName = 'role___project___name',
  RoleProjectSlug = 'role___project___slug',
  RoleProjectStartDate = 'role___project___startDate',
  RoleProjectDuring = 'role___project___during',
  RoleProjectComment = 'role___project___comment',
  RoleProjectSiteUrl = 'role___project___siteUrl',
  RoleProjectSourceUrl = 'role___project___sourceUrl',
  RoleProjectMainImageId = 'role___project___mainImage___id',
  RoleProjectMainImageChildren = 'role___project___mainImage___children',
  RoleProjectMainImageContentfulId = 'role___project___mainImage___contentful_id',
  RoleProjectMainImageSpaceId = 'role___project___mainImage___spaceId',
  RoleProjectMainImageCreatedAt = 'role___project___mainImage___createdAt',
  RoleProjectMainImageUpdatedAt = 'role___project___mainImage___updatedAt',
  RoleProjectMainImageTitle = 'role___project___mainImage___title',
  RoleProjectMainImageDescription = 'role___project___mainImage___description',
  RoleProjectMainImageNodeLocale = 'role___project___mainImage___node_locale',
  RoleProjectRole = 'role___project___role',
  RoleProjectRoleId = 'role___project___role___id',
  RoleProjectRoleChildren = 'role___project___role___children',
  RoleProjectRoleName = 'role___project___role___name',
  RoleProjectRoleProject = 'role___project___role___project',
  RoleProjectRoleSpaceId = 'role___project___role___spaceId',
  RoleProjectRoleContentfulId = 'role___project___role___contentful_id',
  RoleProjectRoleCreatedAt = 'role___project___role___createdAt',
  RoleProjectRoleUpdatedAt = 'role___project___role___updatedAt',
  RoleProjectRoleNodeLocale = 'role___project___role___node_locale',
  RoleProjectAssigne = 'role___project___assigne',
  RoleProjectAssigneId = 'role___project___assigne___id',
  RoleProjectAssigneChildren = 'role___project___assigne___children',
  RoleProjectAssigneName = 'role___project___assigne___name',
  RoleProjectAssigneProject = 'role___project___assigne___project',
  RoleProjectAssigneSpaceId = 'role___project___assigne___spaceId',
  RoleProjectAssigneContentfulId = 'role___project___assigne___contentful_id',
  RoleProjectAssigneCreatedAt = 'role___project___assigne___createdAt',
  RoleProjectAssigneUpdatedAt = 'role___project___assigne___updatedAt',
  RoleProjectAssigneNodeLocale = 'role___project___assigne___node_locale',
  RoleProjectSystem = 'role___project___system',
  RoleProjectSystemId = 'role___project___system___id',
  RoleProjectSystemChildren = 'role___project___system___children',
  RoleProjectSystemName = 'role___project___system___name',
  RoleProjectSystemLevel = 'role___project___system___level',
  RoleProjectSystemProject = 'role___project___system___project',
  RoleProjectSystemSpaceId = 'role___project___system___spaceId',
  RoleProjectSystemContentfulId = 'role___project___system___contentful_id',
  RoleProjectSystemCreatedAt = 'role___project___system___createdAt',
  RoleProjectSystemUpdatedAt = 'role___project___system___updatedAt',
  RoleProjectSystemNodeLocale = 'role___project___system___node_locale',
  RoleProjectSystemSkillmap = 'role___project___system___skillmap',
  RoleProjectLanguage = 'role___project___language',
  RoleProjectLanguageId = 'role___project___language___id',
  RoleProjectLanguageChildren = 'role___project___language___children',
  RoleProjectLanguageName = 'role___project___language___name',
  RoleProjectLanguageLevel = 'role___project___language___level',
  RoleProjectLanguageProject = 'role___project___language___project',
  RoleProjectLanguageSpaceId = 'role___project___language___spaceId',
  RoleProjectLanguageContentfulId = 'role___project___language___contentful_id',
  RoleProjectLanguageCreatedAt = 'role___project___language___createdAt',
  RoleProjectLanguageUpdatedAt = 'role___project___language___updatedAt',
  RoleProjectLanguageNodeLocale = 'role___project___language___node_locale',
  RoleProjectLanguageSkillmap = 'role___project___language___skillmap',
  RoleProjectTools = 'role___project___tools',
  RoleProjectToolsId = 'role___project___tools___id',
  RoleProjectToolsChildren = 'role___project___tools___children',
  RoleProjectToolsName = 'role___project___tools___name',
  RoleProjectToolsLevel = 'role___project___tools___level',
  RoleProjectToolsProject = 'role___project___tools___project',
  RoleProjectToolsSpaceId = 'role___project___tools___spaceId',
  RoleProjectToolsContentfulId = 'role___project___tools___contentful_id',
  RoleProjectToolsCreatedAt = 'role___project___tools___createdAt',
  RoleProjectToolsUpdatedAt = 'role___project___tools___updatedAt',
  RoleProjectToolsNodeLocale = 'role___project___tools___node_locale',
  RoleProjectToolsSkillmap = 'role___project___tools___skillmap',
  RoleProjectSpaceId = 'role___project___spaceId',
  RoleProjectContentfulId = 'role___project___contentful_id',
  RoleProjectCreatedAt = 'role___project___createdAt',
  RoleProjectUpdatedAt = 'role___project___updatedAt',
  RoleProjectSysRevision = 'role___project___sys___revision',
  RoleProjectNodeLocale = 'role___project___node_locale',
  RoleSpaceId = 'role___spaceId',
  RoleContentfulId = 'role___contentful_id',
  RoleCreatedAt = 'role___createdAt',
  RoleUpdatedAt = 'role___updatedAt',
  RoleSysRevision = 'role___sys___revision',
  RoleNodeLocale = 'role___node_locale',
  Assigne = 'assigne',
  AssigneId = 'assigne___id',
  AssigneParentId = 'assigne___parent___id',
  AssigneParentParentId = 'assigne___parent___parent___id',
  AssigneParentParentChildren = 'assigne___parent___parent___children',
  AssigneParentChildren = 'assigne___parent___children',
  AssigneParentChildrenId = 'assigne___parent___children___id',
  AssigneParentChildrenChildren = 'assigne___parent___children___children',
  AssigneParentInternalContent = 'assigne___parent___internal___content',
  AssigneParentInternalContentDigest = 'assigne___parent___internal___contentDigest',
  AssigneParentInternalDescription = 'assigne___parent___internal___description',
  AssigneParentInternalFieldOwners = 'assigne___parent___internal___fieldOwners',
  AssigneParentInternalIgnoreType = 'assigne___parent___internal___ignoreType',
  AssigneParentInternalMediaType = 'assigne___parent___internal___mediaType',
  AssigneParentInternalOwner = 'assigne___parent___internal___owner',
  AssigneParentInternalType = 'assigne___parent___internal___type',
  AssigneChildren = 'assigne___children',
  AssigneChildrenId = 'assigne___children___id',
  AssigneChildrenParentId = 'assigne___children___parent___id',
  AssigneChildrenParentChildren = 'assigne___children___parent___children',
  AssigneChildrenChildren = 'assigne___children___children',
  AssigneChildrenChildrenId = 'assigne___children___children___id',
  AssigneChildrenChildrenChildren = 'assigne___children___children___children',
  AssigneChildrenInternalContent = 'assigne___children___internal___content',
  AssigneChildrenInternalContentDigest = 'assigne___children___internal___contentDigest',
  AssigneChildrenInternalDescription = 'assigne___children___internal___description',
  AssigneChildrenInternalFieldOwners = 'assigne___children___internal___fieldOwners',
  AssigneChildrenInternalIgnoreType = 'assigne___children___internal___ignoreType',
  AssigneChildrenInternalMediaType = 'assigne___children___internal___mediaType',
  AssigneChildrenInternalOwner = 'assigne___children___internal___owner',
  AssigneChildrenInternalType = 'assigne___children___internal___type',
  AssigneInternalContent = 'assigne___internal___content',
  AssigneInternalContentDigest = 'assigne___internal___contentDigest',
  AssigneInternalDescription = 'assigne___internal___description',
  AssigneInternalFieldOwners = 'assigne___internal___fieldOwners',
  AssigneInternalIgnoreType = 'assigne___internal___ignoreType',
  AssigneInternalMediaType = 'assigne___internal___mediaType',
  AssigneInternalOwner = 'assigne___internal___owner',
  AssigneInternalType = 'assigne___internal___type',
  AssigneName = 'assigne___name',
  AssigneProject = 'assigne___project',
  AssigneProjectId = 'assigne___project___id',
  AssigneProjectParentId = 'assigne___project___parent___id',
  AssigneProjectParentChildren = 'assigne___project___parent___children',
  AssigneProjectChildren = 'assigne___project___children',
  AssigneProjectChildrenId = 'assigne___project___children___id',
  AssigneProjectChildrenChildren = 'assigne___project___children___children',
  AssigneProjectInternalContent = 'assigne___project___internal___content',
  AssigneProjectInternalContentDigest = 'assigne___project___internal___contentDigest',
  AssigneProjectInternalDescription = 'assigne___project___internal___description',
  AssigneProjectInternalFieldOwners = 'assigne___project___internal___fieldOwners',
  AssigneProjectInternalIgnoreType = 'assigne___project___internal___ignoreType',
  AssigneProjectInternalMediaType = 'assigne___project___internal___mediaType',
  AssigneProjectInternalOwner = 'assigne___project___internal___owner',
  AssigneProjectInternalType = 'assigne___project___internal___type',
  AssigneProjectName = 'assigne___project___name',
  AssigneProjectSlug = 'assigne___project___slug',
  AssigneProjectStartDate = 'assigne___project___startDate',
  AssigneProjectDuring = 'assigne___project___during',
  AssigneProjectComment = 'assigne___project___comment',
  AssigneProjectSiteUrl = 'assigne___project___siteUrl',
  AssigneProjectSourceUrl = 'assigne___project___sourceUrl',
  AssigneProjectMainImageId = 'assigne___project___mainImage___id',
  AssigneProjectMainImageChildren = 'assigne___project___mainImage___children',
  AssigneProjectMainImageContentfulId = 'assigne___project___mainImage___contentful_id',
  AssigneProjectMainImageSpaceId = 'assigne___project___mainImage___spaceId',
  AssigneProjectMainImageCreatedAt = 'assigne___project___mainImage___createdAt',
  AssigneProjectMainImageUpdatedAt = 'assigne___project___mainImage___updatedAt',
  AssigneProjectMainImageTitle = 'assigne___project___mainImage___title',
  AssigneProjectMainImageDescription = 'assigne___project___mainImage___description',
  AssigneProjectMainImageNodeLocale = 'assigne___project___mainImage___node_locale',
  AssigneProjectRole = 'assigne___project___role',
  AssigneProjectRoleId = 'assigne___project___role___id',
  AssigneProjectRoleChildren = 'assigne___project___role___children',
  AssigneProjectRoleName = 'assigne___project___role___name',
  AssigneProjectRoleProject = 'assigne___project___role___project',
  AssigneProjectRoleSpaceId = 'assigne___project___role___spaceId',
  AssigneProjectRoleContentfulId = 'assigne___project___role___contentful_id',
  AssigneProjectRoleCreatedAt = 'assigne___project___role___createdAt',
  AssigneProjectRoleUpdatedAt = 'assigne___project___role___updatedAt',
  AssigneProjectRoleNodeLocale = 'assigne___project___role___node_locale',
  AssigneProjectAssigne = 'assigne___project___assigne',
  AssigneProjectAssigneId = 'assigne___project___assigne___id',
  AssigneProjectAssigneChildren = 'assigne___project___assigne___children',
  AssigneProjectAssigneName = 'assigne___project___assigne___name',
  AssigneProjectAssigneProject = 'assigne___project___assigne___project',
  AssigneProjectAssigneSpaceId = 'assigne___project___assigne___spaceId',
  AssigneProjectAssigneContentfulId = 'assigne___project___assigne___contentful_id',
  AssigneProjectAssigneCreatedAt = 'assigne___project___assigne___createdAt',
  AssigneProjectAssigneUpdatedAt = 'assigne___project___assigne___updatedAt',
  AssigneProjectAssigneNodeLocale = 'assigne___project___assigne___node_locale',
  AssigneProjectSystem = 'assigne___project___system',
  AssigneProjectSystemId = 'assigne___project___system___id',
  AssigneProjectSystemChildren = 'assigne___project___system___children',
  AssigneProjectSystemName = 'assigne___project___system___name',
  AssigneProjectSystemLevel = 'assigne___project___system___level',
  AssigneProjectSystemProject = 'assigne___project___system___project',
  AssigneProjectSystemSpaceId = 'assigne___project___system___spaceId',
  AssigneProjectSystemContentfulId = 'assigne___project___system___contentful_id',
  AssigneProjectSystemCreatedAt = 'assigne___project___system___createdAt',
  AssigneProjectSystemUpdatedAt = 'assigne___project___system___updatedAt',
  AssigneProjectSystemNodeLocale = 'assigne___project___system___node_locale',
  AssigneProjectSystemSkillmap = 'assigne___project___system___skillmap',
  AssigneProjectLanguage = 'assigne___project___language',
  AssigneProjectLanguageId = 'assigne___project___language___id',
  AssigneProjectLanguageChildren = 'assigne___project___language___children',
  AssigneProjectLanguageName = 'assigne___project___language___name',
  AssigneProjectLanguageLevel = 'assigne___project___language___level',
  AssigneProjectLanguageProject = 'assigne___project___language___project',
  AssigneProjectLanguageSpaceId = 'assigne___project___language___spaceId',
  AssigneProjectLanguageContentfulId = 'assigne___project___language___contentful_id',
  AssigneProjectLanguageCreatedAt = 'assigne___project___language___createdAt',
  AssigneProjectLanguageUpdatedAt = 'assigne___project___language___updatedAt',
  AssigneProjectLanguageNodeLocale = 'assigne___project___language___node_locale',
  AssigneProjectLanguageSkillmap = 'assigne___project___language___skillmap',
  AssigneProjectTools = 'assigne___project___tools',
  AssigneProjectToolsId = 'assigne___project___tools___id',
  AssigneProjectToolsChildren = 'assigne___project___tools___children',
  AssigneProjectToolsName = 'assigne___project___tools___name',
  AssigneProjectToolsLevel = 'assigne___project___tools___level',
  AssigneProjectToolsProject = 'assigne___project___tools___project',
  AssigneProjectToolsSpaceId = 'assigne___project___tools___spaceId',
  AssigneProjectToolsContentfulId = 'assigne___project___tools___contentful_id',
  AssigneProjectToolsCreatedAt = 'assigne___project___tools___createdAt',
  AssigneProjectToolsUpdatedAt = 'assigne___project___tools___updatedAt',
  AssigneProjectToolsNodeLocale = 'assigne___project___tools___node_locale',
  AssigneProjectToolsSkillmap = 'assigne___project___tools___skillmap',
  AssigneProjectSpaceId = 'assigne___project___spaceId',
  AssigneProjectContentfulId = 'assigne___project___contentful_id',
  AssigneProjectCreatedAt = 'assigne___project___createdAt',
  AssigneProjectUpdatedAt = 'assigne___project___updatedAt',
  AssigneProjectSysRevision = 'assigne___project___sys___revision',
  AssigneProjectNodeLocale = 'assigne___project___node_locale',
  AssigneSpaceId = 'assigne___spaceId',
  AssigneContentfulId = 'assigne___contentful_id',
  AssigneCreatedAt = 'assigne___createdAt',
  AssigneUpdatedAt = 'assigne___updatedAt',
  AssigneSysRevision = 'assigne___sys___revision',
  AssigneNodeLocale = 'assigne___node_locale',
  System = 'system',
  SystemId = 'system___id',
  SystemParentId = 'system___parent___id',
  SystemParentParentId = 'system___parent___parent___id',
  SystemParentParentChildren = 'system___parent___parent___children',
  SystemParentChildren = 'system___parent___children',
  SystemParentChildrenId = 'system___parent___children___id',
  SystemParentChildrenChildren = 'system___parent___children___children',
  SystemParentInternalContent = 'system___parent___internal___content',
  SystemParentInternalContentDigest = 'system___parent___internal___contentDigest',
  SystemParentInternalDescription = 'system___parent___internal___description',
  SystemParentInternalFieldOwners = 'system___parent___internal___fieldOwners',
  SystemParentInternalIgnoreType = 'system___parent___internal___ignoreType',
  SystemParentInternalMediaType = 'system___parent___internal___mediaType',
  SystemParentInternalOwner = 'system___parent___internal___owner',
  SystemParentInternalType = 'system___parent___internal___type',
  SystemChildren = 'system___children',
  SystemChildrenId = 'system___children___id',
  SystemChildrenParentId = 'system___children___parent___id',
  SystemChildrenParentChildren = 'system___children___parent___children',
  SystemChildrenChildren = 'system___children___children',
  SystemChildrenChildrenId = 'system___children___children___id',
  SystemChildrenChildrenChildren = 'system___children___children___children',
  SystemChildrenInternalContent = 'system___children___internal___content',
  SystemChildrenInternalContentDigest = 'system___children___internal___contentDigest',
  SystemChildrenInternalDescription = 'system___children___internal___description',
  SystemChildrenInternalFieldOwners = 'system___children___internal___fieldOwners',
  SystemChildrenInternalIgnoreType = 'system___children___internal___ignoreType',
  SystemChildrenInternalMediaType = 'system___children___internal___mediaType',
  SystemChildrenInternalOwner = 'system___children___internal___owner',
  SystemChildrenInternalType = 'system___children___internal___type',
  SystemInternalContent = 'system___internal___content',
  SystemInternalContentDigest = 'system___internal___contentDigest',
  SystemInternalDescription = 'system___internal___description',
  SystemInternalFieldOwners = 'system___internal___fieldOwners',
  SystemInternalIgnoreType = 'system___internal___ignoreType',
  SystemInternalMediaType = 'system___internal___mediaType',
  SystemInternalOwner = 'system___internal___owner',
  SystemInternalType = 'system___internal___type',
  SystemName = 'system___name',
  SystemLevel = 'system___level',
  SystemProject = 'system___project',
  SystemProjectId = 'system___project___id',
  SystemProjectParentId = 'system___project___parent___id',
  SystemProjectParentChildren = 'system___project___parent___children',
  SystemProjectChildren = 'system___project___children',
  SystemProjectChildrenId = 'system___project___children___id',
  SystemProjectChildrenChildren = 'system___project___children___children',
  SystemProjectInternalContent = 'system___project___internal___content',
  SystemProjectInternalContentDigest = 'system___project___internal___contentDigest',
  SystemProjectInternalDescription = 'system___project___internal___description',
  SystemProjectInternalFieldOwners = 'system___project___internal___fieldOwners',
  SystemProjectInternalIgnoreType = 'system___project___internal___ignoreType',
  SystemProjectInternalMediaType = 'system___project___internal___mediaType',
  SystemProjectInternalOwner = 'system___project___internal___owner',
  SystemProjectInternalType = 'system___project___internal___type',
  SystemProjectName = 'system___project___name',
  SystemProjectSlug = 'system___project___slug',
  SystemProjectStartDate = 'system___project___startDate',
  SystemProjectDuring = 'system___project___during',
  SystemProjectComment = 'system___project___comment',
  SystemProjectSiteUrl = 'system___project___siteUrl',
  SystemProjectSourceUrl = 'system___project___sourceUrl',
  SystemProjectMainImageId = 'system___project___mainImage___id',
  SystemProjectMainImageChildren = 'system___project___mainImage___children',
  SystemProjectMainImageContentfulId = 'system___project___mainImage___contentful_id',
  SystemProjectMainImageSpaceId = 'system___project___mainImage___spaceId',
  SystemProjectMainImageCreatedAt = 'system___project___mainImage___createdAt',
  SystemProjectMainImageUpdatedAt = 'system___project___mainImage___updatedAt',
  SystemProjectMainImageTitle = 'system___project___mainImage___title',
  SystemProjectMainImageDescription = 'system___project___mainImage___description',
  SystemProjectMainImageNodeLocale = 'system___project___mainImage___node_locale',
  SystemProjectRole = 'system___project___role',
  SystemProjectRoleId = 'system___project___role___id',
  SystemProjectRoleChildren = 'system___project___role___children',
  SystemProjectRoleName = 'system___project___role___name',
  SystemProjectRoleProject = 'system___project___role___project',
  SystemProjectRoleSpaceId = 'system___project___role___spaceId',
  SystemProjectRoleContentfulId = 'system___project___role___contentful_id',
  SystemProjectRoleCreatedAt = 'system___project___role___createdAt',
  SystemProjectRoleUpdatedAt = 'system___project___role___updatedAt',
  SystemProjectRoleNodeLocale = 'system___project___role___node_locale',
  SystemProjectAssigne = 'system___project___assigne',
  SystemProjectAssigneId = 'system___project___assigne___id',
  SystemProjectAssigneChildren = 'system___project___assigne___children',
  SystemProjectAssigneName = 'system___project___assigne___name',
  SystemProjectAssigneProject = 'system___project___assigne___project',
  SystemProjectAssigneSpaceId = 'system___project___assigne___spaceId',
  SystemProjectAssigneContentfulId = 'system___project___assigne___contentful_id',
  SystemProjectAssigneCreatedAt = 'system___project___assigne___createdAt',
  SystemProjectAssigneUpdatedAt = 'system___project___assigne___updatedAt',
  SystemProjectAssigneNodeLocale = 'system___project___assigne___node_locale',
  SystemProjectSystem = 'system___project___system',
  SystemProjectSystemId = 'system___project___system___id',
  SystemProjectSystemChildren = 'system___project___system___children',
  SystemProjectSystemName = 'system___project___system___name',
  SystemProjectSystemLevel = 'system___project___system___level',
  SystemProjectSystemProject = 'system___project___system___project',
  SystemProjectSystemSpaceId = 'system___project___system___spaceId',
  SystemProjectSystemContentfulId = 'system___project___system___contentful_id',
  SystemProjectSystemCreatedAt = 'system___project___system___createdAt',
  SystemProjectSystemUpdatedAt = 'system___project___system___updatedAt',
  SystemProjectSystemNodeLocale = 'system___project___system___node_locale',
  SystemProjectSystemSkillmap = 'system___project___system___skillmap',
  SystemProjectLanguage = 'system___project___language',
  SystemProjectLanguageId = 'system___project___language___id',
  SystemProjectLanguageChildren = 'system___project___language___children',
  SystemProjectLanguageName = 'system___project___language___name',
  SystemProjectLanguageLevel = 'system___project___language___level',
  SystemProjectLanguageProject = 'system___project___language___project',
  SystemProjectLanguageSpaceId = 'system___project___language___spaceId',
  SystemProjectLanguageContentfulId = 'system___project___language___contentful_id',
  SystemProjectLanguageCreatedAt = 'system___project___language___createdAt',
  SystemProjectLanguageUpdatedAt = 'system___project___language___updatedAt',
  SystemProjectLanguageNodeLocale = 'system___project___language___node_locale',
  SystemProjectLanguageSkillmap = 'system___project___language___skillmap',
  SystemProjectTools = 'system___project___tools',
  SystemProjectToolsId = 'system___project___tools___id',
  SystemProjectToolsChildren = 'system___project___tools___children',
  SystemProjectToolsName = 'system___project___tools___name',
  SystemProjectToolsLevel = 'system___project___tools___level',
  SystemProjectToolsProject = 'system___project___tools___project',
  SystemProjectToolsSpaceId = 'system___project___tools___spaceId',
  SystemProjectToolsContentfulId = 'system___project___tools___contentful_id',
  SystemProjectToolsCreatedAt = 'system___project___tools___createdAt',
  SystemProjectToolsUpdatedAt = 'system___project___tools___updatedAt',
  SystemProjectToolsNodeLocale = 'system___project___tools___node_locale',
  SystemProjectToolsSkillmap = 'system___project___tools___skillmap',
  SystemProjectSpaceId = 'system___project___spaceId',
  SystemProjectContentfulId = 'system___project___contentful_id',
  SystemProjectCreatedAt = 'system___project___createdAt',
  SystemProjectUpdatedAt = 'system___project___updatedAt',
  SystemProjectSysRevision = 'system___project___sys___revision',
  SystemProjectNodeLocale = 'system___project___node_locale',
  SystemSpaceId = 'system___spaceId',
  SystemContentfulId = 'system___contentful_id',
  SystemCreatedAt = 'system___createdAt',
  SystemUpdatedAt = 'system___updatedAt',
  SystemSysRevision = 'system___sys___revision',
  SystemNodeLocale = 'system___node_locale',
  SystemSkillmap = 'system___skillmap',
  SystemSkillmapId = 'system___skillmap___id',
  SystemSkillmapParentId = 'system___skillmap___parent___id',
  SystemSkillmapParentChildren = 'system___skillmap___parent___children',
  SystemSkillmapChildren = 'system___skillmap___children',
  SystemSkillmapChildrenId = 'system___skillmap___children___id',
  SystemSkillmapChildrenChildren = 'system___skillmap___children___children',
  SystemSkillmapInternalContent = 'system___skillmap___internal___content',
  SystemSkillmapInternalContentDigest = 'system___skillmap___internal___contentDigest',
  SystemSkillmapInternalDescription = 'system___skillmap___internal___description',
  SystemSkillmapInternalFieldOwners = 'system___skillmap___internal___fieldOwners',
  SystemSkillmapInternalIgnoreType = 'system___skillmap___internal___ignoreType',
  SystemSkillmapInternalMediaType = 'system___skillmap___internal___mediaType',
  SystemSkillmapInternalOwner = 'system___skillmap___internal___owner',
  SystemSkillmapInternalType = 'system___skillmap___internal___type',
  SystemSkillmapName = 'system___skillmap___name',
  SystemSkillmapSkills = 'system___skillmap___skills',
  SystemSkillmapSkillsId = 'system___skillmap___skills___id',
  SystemSkillmapSkillsChildren = 'system___skillmap___skills___children',
  SystemSkillmapSkillsName = 'system___skillmap___skills___name',
  SystemSkillmapSkillsLevel = 'system___skillmap___skills___level',
  SystemSkillmapSkillsProject = 'system___skillmap___skills___project',
  SystemSkillmapSkillsSpaceId = 'system___skillmap___skills___spaceId',
  SystemSkillmapSkillsContentfulId = 'system___skillmap___skills___contentful_id',
  SystemSkillmapSkillsCreatedAt = 'system___skillmap___skills___createdAt',
  SystemSkillmapSkillsUpdatedAt = 'system___skillmap___skills___updatedAt',
  SystemSkillmapSkillsNodeLocale = 'system___skillmap___skills___node_locale',
  SystemSkillmapSkillsSkillmap = 'system___skillmap___skills___skillmap',
  SystemSkillmapSpaceId = 'system___skillmap___spaceId',
  SystemSkillmapContentfulId = 'system___skillmap___contentful_id',
  SystemSkillmapCreatedAt = 'system___skillmap___createdAt',
  SystemSkillmapUpdatedAt = 'system___skillmap___updatedAt',
  SystemSkillmapSysRevision = 'system___skillmap___sys___revision',
  SystemSkillmapNodeLocale = 'system___skillmap___node_locale',
  Language = 'language',
  LanguageId = 'language___id',
  LanguageParentId = 'language___parent___id',
  LanguageParentParentId = 'language___parent___parent___id',
  LanguageParentParentChildren = 'language___parent___parent___children',
  LanguageParentChildren = 'language___parent___children',
  LanguageParentChildrenId = 'language___parent___children___id',
  LanguageParentChildrenChildren = 'language___parent___children___children',
  LanguageParentInternalContent = 'language___parent___internal___content',
  LanguageParentInternalContentDigest = 'language___parent___internal___contentDigest',
  LanguageParentInternalDescription = 'language___parent___internal___description',
  LanguageParentInternalFieldOwners = 'language___parent___internal___fieldOwners',
  LanguageParentInternalIgnoreType = 'language___parent___internal___ignoreType',
  LanguageParentInternalMediaType = 'language___parent___internal___mediaType',
  LanguageParentInternalOwner = 'language___parent___internal___owner',
  LanguageParentInternalType = 'language___parent___internal___type',
  LanguageChildren = 'language___children',
  LanguageChildrenId = 'language___children___id',
  LanguageChildrenParentId = 'language___children___parent___id',
  LanguageChildrenParentChildren = 'language___children___parent___children',
  LanguageChildrenChildren = 'language___children___children',
  LanguageChildrenChildrenId = 'language___children___children___id',
  LanguageChildrenChildrenChildren = 'language___children___children___children',
  LanguageChildrenInternalContent = 'language___children___internal___content',
  LanguageChildrenInternalContentDigest = 'language___children___internal___contentDigest',
  LanguageChildrenInternalDescription = 'language___children___internal___description',
  LanguageChildrenInternalFieldOwners = 'language___children___internal___fieldOwners',
  LanguageChildrenInternalIgnoreType = 'language___children___internal___ignoreType',
  LanguageChildrenInternalMediaType = 'language___children___internal___mediaType',
  LanguageChildrenInternalOwner = 'language___children___internal___owner',
  LanguageChildrenInternalType = 'language___children___internal___type',
  LanguageInternalContent = 'language___internal___content',
  LanguageInternalContentDigest = 'language___internal___contentDigest',
  LanguageInternalDescription = 'language___internal___description',
  LanguageInternalFieldOwners = 'language___internal___fieldOwners',
  LanguageInternalIgnoreType = 'language___internal___ignoreType',
  LanguageInternalMediaType = 'language___internal___mediaType',
  LanguageInternalOwner = 'language___internal___owner',
  LanguageInternalType = 'language___internal___type',
  LanguageName = 'language___name',
  LanguageLevel = 'language___level',
  LanguageProject = 'language___project',
  LanguageProjectId = 'language___project___id',
  LanguageProjectParentId = 'language___project___parent___id',
  LanguageProjectParentChildren = 'language___project___parent___children',
  LanguageProjectChildren = 'language___project___children',
  LanguageProjectChildrenId = 'language___project___children___id',
  LanguageProjectChildrenChildren = 'language___project___children___children',
  LanguageProjectInternalContent = 'language___project___internal___content',
  LanguageProjectInternalContentDigest = 'language___project___internal___contentDigest',
  LanguageProjectInternalDescription = 'language___project___internal___description',
  LanguageProjectInternalFieldOwners = 'language___project___internal___fieldOwners',
  LanguageProjectInternalIgnoreType = 'language___project___internal___ignoreType',
  LanguageProjectInternalMediaType = 'language___project___internal___mediaType',
  LanguageProjectInternalOwner = 'language___project___internal___owner',
  LanguageProjectInternalType = 'language___project___internal___type',
  LanguageProjectName = 'language___project___name',
  LanguageProjectSlug = 'language___project___slug',
  LanguageProjectStartDate = 'language___project___startDate',
  LanguageProjectDuring = 'language___project___during',
  LanguageProjectComment = 'language___project___comment',
  LanguageProjectSiteUrl = 'language___project___siteUrl',
  LanguageProjectSourceUrl = 'language___project___sourceUrl',
  LanguageProjectMainImageId = 'language___project___mainImage___id',
  LanguageProjectMainImageChildren = 'language___project___mainImage___children',
  LanguageProjectMainImageContentfulId = 'language___project___mainImage___contentful_id',
  LanguageProjectMainImageSpaceId = 'language___project___mainImage___spaceId',
  LanguageProjectMainImageCreatedAt = 'language___project___mainImage___createdAt',
  LanguageProjectMainImageUpdatedAt = 'language___project___mainImage___updatedAt',
  LanguageProjectMainImageTitle = 'language___project___mainImage___title',
  LanguageProjectMainImageDescription = 'language___project___mainImage___description',
  LanguageProjectMainImageNodeLocale = 'language___project___mainImage___node_locale',
  LanguageProjectRole = 'language___project___role',
  LanguageProjectRoleId = 'language___project___role___id',
  LanguageProjectRoleChildren = 'language___project___role___children',
  LanguageProjectRoleName = 'language___project___role___name',
  LanguageProjectRoleProject = 'language___project___role___project',
  LanguageProjectRoleSpaceId = 'language___project___role___spaceId',
  LanguageProjectRoleContentfulId = 'language___project___role___contentful_id',
  LanguageProjectRoleCreatedAt = 'language___project___role___createdAt',
  LanguageProjectRoleUpdatedAt = 'language___project___role___updatedAt',
  LanguageProjectRoleNodeLocale = 'language___project___role___node_locale',
  LanguageProjectAssigne = 'language___project___assigne',
  LanguageProjectAssigneId = 'language___project___assigne___id',
  LanguageProjectAssigneChildren = 'language___project___assigne___children',
  LanguageProjectAssigneName = 'language___project___assigne___name',
  LanguageProjectAssigneProject = 'language___project___assigne___project',
  LanguageProjectAssigneSpaceId = 'language___project___assigne___spaceId',
  LanguageProjectAssigneContentfulId = 'language___project___assigne___contentful_id',
  LanguageProjectAssigneCreatedAt = 'language___project___assigne___createdAt',
  LanguageProjectAssigneUpdatedAt = 'language___project___assigne___updatedAt',
  LanguageProjectAssigneNodeLocale = 'language___project___assigne___node_locale',
  LanguageProjectSystem = 'language___project___system',
  LanguageProjectSystemId = 'language___project___system___id',
  LanguageProjectSystemChildren = 'language___project___system___children',
  LanguageProjectSystemName = 'language___project___system___name',
  LanguageProjectSystemLevel = 'language___project___system___level',
  LanguageProjectSystemProject = 'language___project___system___project',
  LanguageProjectSystemSpaceId = 'language___project___system___spaceId',
  LanguageProjectSystemContentfulId = 'language___project___system___contentful_id',
  LanguageProjectSystemCreatedAt = 'language___project___system___createdAt',
  LanguageProjectSystemUpdatedAt = 'language___project___system___updatedAt',
  LanguageProjectSystemNodeLocale = 'language___project___system___node_locale',
  LanguageProjectSystemSkillmap = 'language___project___system___skillmap',
  LanguageProjectLanguage = 'language___project___language',
  LanguageProjectLanguageId = 'language___project___language___id',
  LanguageProjectLanguageChildren = 'language___project___language___children',
  LanguageProjectLanguageName = 'language___project___language___name',
  LanguageProjectLanguageLevel = 'language___project___language___level',
  LanguageProjectLanguageProject = 'language___project___language___project',
  LanguageProjectLanguageSpaceId = 'language___project___language___spaceId',
  LanguageProjectLanguageContentfulId = 'language___project___language___contentful_id',
  LanguageProjectLanguageCreatedAt = 'language___project___language___createdAt',
  LanguageProjectLanguageUpdatedAt = 'language___project___language___updatedAt',
  LanguageProjectLanguageNodeLocale = 'language___project___language___node_locale',
  LanguageProjectLanguageSkillmap = 'language___project___language___skillmap',
  LanguageProjectTools = 'language___project___tools',
  LanguageProjectToolsId = 'language___project___tools___id',
  LanguageProjectToolsChildren = 'language___project___tools___children',
  LanguageProjectToolsName = 'language___project___tools___name',
  LanguageProjectToolsLevel = 'language___project___tools___level',
  LanguageProjectToolsProject = 'language___project___tools___project',
  LanguageProjectToolsSpaceId = 'language___project___tools___spaceId',
  LanguageProjectToolsContentfulId = 'language___project___tools___contentful_id',
  LanguageProjectToolsCreatedAt = 'language___project___tools___createdAt',
  LanguageProjectToolsUpdatedAt = 'language___project___tools___updatedAt',
  LanguageProjectToolsNodeLocale = 'language___project___tools___node_locale',
  LanguageProjectToolsSkillmap = 'language___project___tools___skillmap',
  LanguageProjectSpaceId = 'language___project___spaceId',
  LanguageProjectContentfulId = 'language___project___contentful_id',
  LanguageProjectCreatedAt = 'language___project___createdAt',
  LanguageProjectUpdatedAt = 'language___project___updatedAt',
  LanguageProjectSysRevision = 'language___project___sys___revision',
  LanguageProjectNodeLocale = 'language___project___node_locale',
  LanguageSpaceId = 'language___spaceId',
  LanguageContentfulId = 'language___contentful_id',
  LanguageCreatedAt = 'language___createdAt',
  LanguageUpdatedAt = 'language___updatedAt',
  LanguageSysRevision = 'language___sys___revision',
  LanguageNodeLocale = 'language___node_locale',
  LanguageSkillmap = 'language___skillmap',
  LanguageSkillmapId = 'language___skillmap___id',
  LanguageSkillmapParentId = 'language___skillmap___parent___id',
  LanguageSkillmapParentChildren = 'language___skillmap___parent___children',
  LanguageSkillmapChildren = 'language___skillmap___children',
  LanguageSkillmapChildrenId = 'language___skillmap___children___id',
  LanguageSkillmapChildrenChildren = 'language___skillmap___children___children',
  LanguageSkillmapInternalContent = 'language___skillmap___internal___content',
  LanguageSkillmapInternalContentDigest = 'language___skillmap___internal___contentDigest',
  LanguageSkillmapInternalDescription = 'language___skillmap___internal___description',
  LanguageSkillmapInternalFieldOwners = 'language___skillmap___internal___fieldOwners',
  LanguageSkillmapInternalIgnoreType = 'language___skillmap___internal___ignoreType',
  LanguageSkillmapInternalMediaType = 'language___skillmap___internal___mediaType',
  LanguageSkillmapInternalOwner = 'language___skillmap___internal___owner',
  LanguageSkillmapInternalType = 'language___skillmap___internal___type',
  LanguageSkillmapName = 'language___skillmap___name',
  LanguageSkillmapSkills = 'language___skillmap___skills',
  LanguageSkillmapSkillsId = 'language___skillmap___skills___id',
  LanguageSkillmapSkillsChildren = 'language___skillmap___skills___children',
  LanguageSkillmapSkillsName = 'language___skillmap___skills___name',
  LanguageSkillmapSkillsLevel = 'language___skillmap___skills___level',
  LanguageSkillmapSkillsProject = 'language___skillmap___skills___project',
  LanguageSkillmapSkillsSpaceId = 'language___skillmap___skills___spaceId',
  LanguageSkillmapSkillsContentfulId = 'language___skillmap___skills___contentful_id',
  LanguageSkillmapSkillsCreatedAt = 'language___skillmap___skills___createdAt',
  LanguageSkillmapSkillsUpdatedAt = 'language___skillmap___skills___updatedAt',
  LanguageSkillmapSkillsNodeLocale = 'language___skillmap___skills___node_locale',
  LanguageSkillmapSkillsSkillmap = 'language___skillmap___skills___skillmap',
  LanguageSkillmapSpaceId = 'language___skillmap___spaceId',
  LanguageSkillmapContentfulId = 'language___skillmap___contentful_id',
  LanguageSkillmapCreatedAt = 'language___skillmap___createdAt',
  LanguageSkillmapUpdatedAt = 'language___skillmap___updatedAt',
  LanguageSkillmapSysRevision = 'language___skillmap___sys___revision',
  LanguageSkillmapNodeLocale = 'language___skillmap___node_locale',
  Tools = 'tools',
  ToolsId = 'tools___id',
  ToolsParentId = 'tools___parent___id',
  ToolsParentParentId = 'tools___parent___parent___id',
  ToolsParentParentChildren = 'tools___parent___parent___children',
  ToolsParentChildren = 'tools___parent___children',
  ToolsParentChildrenId = 'tools___parent___children___id',
  ToolsParentChildrenChildren = 'tools___parent___children___children',
  ToolsParentInternalContent = 'tools___parent___internal___content',
  ToolsParentInternalContentDigest = 'tools___parent___internal___contentDigest',
  ToolsParentInternalDescription = 'tools___parent___internal___description',
  ToolsParentInternalFieldOwners = 'tools___parent___internal___fieldOwners',
  ToolsParentInternalIgnoreType = 'tools___parent___internal___ignoreType',
  ToolsParentInternalMediaType = 'tools___parent___internal___mediaType',
  ToolsParentInternalOwner = 'tools___parent___internal___owner',
  ToolsParentInternalType = 'tools___parent___internal___type',
  ToolsChildren = 'tools___children',
  ToolsChildrenId = 'tools___children___id',
  ToolsChildrenParentId = 'tools___children___parent___id',
  ToolsChildrenParentChildren = 'tools___children___parent___children',
  ToolsChildrenChildren = 'tools___children___children',
  ToolsChildrenChildrenId = 'tools___children___children___id',
  ToolsChildrenChildrenChildren = 'tools___children___children___children',
  ToolsChildrenInternalContent = 'tools___children___internal___content',
  ToolsChildrenInternalContentDigest = 'tools___children___internal___contentDigest',
  ToolsChildrenInternalDescription = 'tools___children___internal___description',
  ToolsChildrenInternalFieldOwners = 'tools___children___internal___fieldOwners',
  ToolsChildrenInternalIgnoreType = 'tools___children___internal___ignoreType',
  ToolsChildrenInternalMediaType = 'tools___children___internal___mediaType',
  ToolsChildrenInternalOwner = 'tools___children___internal___owner',
  ToolsChildrenInternalType = 'tools___children___internal___type',
  ToolsInternalContent = 'tools___internal___content',
  ToolsInternalContentDigest = 'tools___internal___contentDigest',
  ToolsInternalDescription = 'tools___internal___description',
  ToolsInternalFieldOwners = 'tools___internal___fieldOwners',
  ToolsInternalIgnoreType = 'tools___internal___ignoreType',
  ToolsInternalMediaType = 'tools___internal___mediaType',
  ToolsInternalOwner = 'tools___internal___owner',
  ToolsInternalType = 'tools___internal___type',
  ToolsName = 'tools___name',
  ToolsLevel = 'tools___level',
  ToolsProject = 'tools___project',
  ToolsProjectId = 'tools___project___id',
  ToolsProjectParentId = 'tools___project___parent___id',
  ToolsProjectParentChildren = 'tools___project___parent___children',
  ToolsProjectChildren = 'tools___project___children',
  ToolsProjectChildrenId = 'tools___project___children___id',
  ToolsProjectChildrenChildren = 'tools___project___children___children',
  ToolsProjectInternalContent = 'tools___project___internal___content',
  ToolsProjectInternalContentDigest = 'tools___project___internal___contentDigest',
  ToolsProjectInternalDescription = 'tools___project___internal___description',
  ToolsProjectInternalFieldOwners = 'tools___project___internal___fieldOwners',
  ToolsProjectInternalIgnoreType = 'tools___project___internal___ignoreType',
  ToolsProjectInternalMediaType = 'tools___project___internal___mediaType',
  ToolsProjectInternalOwner = 'tools___project___internal___owner',
  ToolsProjectInternalType = 'tools___project___internal___type',
  ToolsProjectName = 'tools___project___name',
  ToolsProjectSlug = 'tools___project___slug',
  ToolsProjectStartDate = 'tools___project___startDate',
  ToolsProjectDuring = 'tools___project___during',
  ToolsProjectComment = 'tools___project___comment',
  ToolsProjectSiteUrl = 'tools___project___siteUrl',
  ToolsProjectSourceUrl = 'tools___project___sourceUrl',
  ToolsProjectMainImageId = 'tools___project___mainImage___id',
  ToolsProjectMainImageChildren = 'tools___project___mainImage___children',
  ToolsProjectMainImageContentfulId = 'tools___project___mainImage___contentful_id',
  ToolsProjectMainImageSpaceId = 'tools___project___mainImage___spaceId',
  ToolsProjectMainImageCreatedAt = 'tools___project___mainImage___createdAt',
  ToolsProjectMainImageUpdatedAt = 'tools___project___mainImage___updatedAt',
  ToolsProjectMainImageTitle = 'tools___project___mainImage___title',
  ToolsProjectMainImageDescription = 'tools___project___mainImage___description',
  ToolsProjectMainImageNodeLocale = 'tools___project___mainImage___node_locale',
  ToolsProjectRole = 'tools___project___role',
  ToolsProjectRoleId = 'tools___project___role___id',
  ToolsProjectRoleChildren = 'tools___project___role___children',
  ToolsProjectRoleName = 'tools___project___role___name',
  ToolsProjectRoleProject = 'tools___project___role___project',
  ToolsProjectRoleSpaceId = 'tools___project___role___spaceId',
  ToolsProjectRoleContentfulId = 'tools___project___role___contentful_id',
  ToolsProjectRoleCreatedAt = 'tools___project___role___createdAt',
  ToolsProjectRoleUpdatedAt = 'tools___project___role___updatedAt',
  ToolsProjectRoleNodeLocale = 'tools___project___role___node_locale',
  ToolsProjectAssigne = 'tools___project___assigne',
  ToolsProjectAssigneId = 'tools___project___assigne___id',
  ToolsProjectAssigneChildren = 'tools___project___assigne___children',
  ToolsProjectAssigneName = 'tools___project___assigne___name',
  ToolsProjectAssigneProject = 'tools___project___assigne___project',
  ToolsProjectAssigneSpaceId = 'tools___project___assigne___spaceId',
  ToolsProjectAssigneContentfulId = 'tools___project___assigne___contentful_id',
  ToolsProjectAssigneCreatedAt = 'tools___project___assigne___createdAt',
  ToolsProjectAssigneUpdatedAt = 'tools___project___assigne___updatedAt',
  ToolsProjectAssigneNodeLocale = 'tools___project___assigne___node_locale',
  ToolsProjectSystem = 'tools___project___system',
  ToolsProjectSystemId = 'tools___project___system___id',
  ToolsProjectSystemChildren = 'tools___project___system___children',
  ToolsProjectSystemName = 'tools___project___system___name',
  ToolsProjectSystemLevel = 'tools___project___system___level',
  ToolsProjectSystemProject = 'tools___project___system___project',
  ToolsProjectSystemSpaceId = 'tools___project___system___spaceId',
  ToolsProjectSystemContentfulId = 'tools___project___system___contentful_id',
  ToolsProjectSystemCreatedAt = 'tools___project___system___createdAt',
  ToolsProjectSystemUpdatedAt = 'tools___project___system___updatedAt',
  ToolsProjectSystemNodeLocale = 'tools___project___system___node_locale',
  ToolsProjectSystemSkillmap = 'tools___project___system___skillmap',
  ToolsProjectLanguage = 'tools___project___language',
  ToolsProjectLanguageId = 'tools___project___language___id',
  ToolsProjectLanguageChildren = 'tools___project___language___children',
  ToolsProjectLanguageName = 'tools___project___language___name',
  ToolsProjectLanguageLevel = 'tools___project___language___level',
  ToolsProjectLanguageProject = 'tools___project___language___project',
  ToolsProjectLanguageSpaceId = 'tools___project___language___spaceId',
  ToolsProjectLanguageContentfulId = 'tools___project___language___contentful_id',
  ToolsProjectLanguageCreatedAt = 'tools___project___language___createdAt',
  ToolsProjectLanguageUpdatedAt = 'tools___project___language___updatedAt',
  ToolsProjectLanguageNodeLocale = 'tools___project___language___node_locale',
  ToolsProjectLanguageSkillmap = 'tools___project___language___skillmap',
  ToolsProjectTools = 'tools___project___tools',
  ToolsProjectToolsId = 'tools___project___tools___id',
  ToolsProjectToolsChildren = 'tools___project___tools___children',
  ToolsProjectToolsName = 'tools___project___tools___name',
  ToolsProjectToolsLevel = 'tools___project___tools___level',
  ToolsProjectToolsProject = 'tools___project___tools___project',
  ToolsProjectToolsSpaceId = 'tools___project___tools___spaceId',
  ToolsProjectToolsContentfulId = 'tools___project___tools___contentful_id',
  ToolsProjectToolsCreatedAt = 'tools___project___tools___createdAt',
  ToolsProjectToolsUpdatedAt = 'tools___project___tools___updatedAt',
  ToolsProjectToolsNodeLocale = 'tools___project___tools___node_locale',
  ToolsProjectToolsSkillmap = 'tools___project___tools___skillmap',
  ToolsProjectSpaceId = 'tools___project___spaceId',
  ToolsProjectContentfulId = 'tools___project___contentful_id',
  ToolsProjectCreatedAt = 'tools___project___createdAt',
  ToolsProjectUpdatedAt = 'tools___project___updatedAt',
  ToolsProjectSysRevision = 'tools___project___sys___revision',
  ToolsProjectNodeLocale = 'tools___project___node_locale',
  ToolsSpaceId = 'tools___spaceId',
  ToolsContentfulId = 'tools___contentful_id',
  ToolsCreatedAt = 'tools___createdAt',
  ToolsUpdatedAt = 'tools___updatedAt',
  ToolsSysRevision = 'tools___sys___revision',
  ToolsNodeLocale = 'tools___node_locale',
  ToolsSkillmap = 'tools___skillmap',
  ToolsSkillmapId = 'tools___skillmap___id',
  ToolsSkillmapParentId = 'tools___skillmap___parent___id',
  ToolsSkillmapParentChildren = 'tools___skillmap___parent___children',
  ToolsSkillmapChildren = 'tools___skillmap___children',
  ToolsSkillmapChildrenId = 'tools___skillmap___children___id',
  ToolsSkillmapChildrenChildren = 'tools___skillmap___children___children',
  ToolsSkillmapInternalContent = 'tools___skillmap___internal___content',
  ToolsSkillmapInternalContentDigest = 'tools___skillmap___internal___contentDigest',
  ToolsSkillmapInternalDescription = 'tools___skillmap___internal___description',
  ToolsSkillmapInternalFieldOwners = 'tools___skillmap___internal___fieldOwners',
  ToolsSkillmapInternalIgnoreType = 'tools___skillmap___internal___ignoreType',
  ToolsSkillmapInternalMediaType = 'tools___skillmap___internal___mediaType',
  ToolsSkillmapInternalOwner = 'tools___skillmap___internal___owner',
  ToolsSkillmapInternalType = 'tools___skillmap___internal___type',
  ToolsSkillmapName = 'tools___skillmap___name',
  ToolsSkillmapSkills = 'tools___skillmap___skills',
  ToolsSkillmapSkillsId = 'tools___skillmap___skills___id',
  ToolsSkillmapSkillsChildren = 'tools___skillmap___skills___children',
  ToolsSkillmapSkillsName = 'tools___skillmap___skills___name',
  ToolsSkillmapSkillsLevel = 'tools___skillmap___skills___level',
  ToolsSkillmapSkillsProject = 'tools___skillmap___skills___project',
  ToolsSkillmapSkillsSpaceId = 'tools___skillmap___skills___spaceId',
  ToolsSkillmapSkillsContentfulId = 'tools___skillmap___skills___contentful_id',
  ToolsSkillmapSkillsCreatedAt = 'tools___skillmap___skills___createdAt',
  ToolsSkillmapSkillsUpdatedAt = 'tools___skillmap___skills___updatedAt',
  ToolsSkillmapSkillsNodeLocale = 'tools___skillmap___skills___node_locale',
  ToolsSkillmapSkillsSkillmap = 'tools___skillmap___skills___skillmap',
  ToolsSkillmapSpaceId = 'tools___skillmap___spaceId',
  ToolsSkillmapContentfulId = 'tools___skillmap___contentful_id',
  ToolsSkillmapCreatedAt = 'tools___skillmap___createdAt',
  ToolsSkillmapUpdatedAt = 'tools___skillmap___updatedAt',
  ToolsSkillmapSysRevision = 'tools___skillmap___sys___revision',
  ToolsSkillmapNodeLocale = 'tools___skillmap___node_locale',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale'
}

export type ContentfulProjectFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  during?: Maybe<IntQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  mainImage?: Maybe<ContentfulAssetFilterInput>;
  role?: Maybe<ContentfulRoleFilterListInput>;
  assigne?: Maybe<ContentfulAssigneFilterListInput>;
  system?: Maybe<ContentfulSkillFilterListInput>;
  language?: Maybe<ContentfulSkillFilterListInput>;
  tools?: Maybe<ContentfulSkillFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectFilterListInput = {
  elemMatch?: Maybe<ContentfulProjectFilterInput>;
};

export type ContentfulProjectGroupConnection = {
  __typename?: 'ContentfulProjectGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProjectSys = {
  __typename?: 'ContentfulProjectSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulProjectSysContentType>;
};

export type ContentfulProjectSysContentType = {
  __typename?: 'ContentfulProjectSysContentType';
  sys?: Maybe<ContentfulProjectSysContentTypeSys>;
};

export type ContentfulProjectSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulProjectSysContentTypeSysFilterInput>;
};

export type ContentfulProjectSysContentTypeSys = {
  __typename?: 'ContentfulProjectSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulProjectSysContentTypeFilterInput>;
};

export type ContentfulQualifications = Node & {
  __typename?: 'ContentfulQualifications';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  comment?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulQualificationsSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulQualificationsDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQualificationsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQualificationsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationsConnection = {
  __typename?: 'ContentfulQualificationsConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQualificationsEdge>;
  nodes: Array<ContentfulQualifications>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQualificationsGroupConnection>;
};


export type ContentfulQualificationsConnectionDistinctArgs = {
  field: ContentfulQualificationsFieldsEnum;
};


export type ContentfulQualificationsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQualificationsFieldsEnum;
};

export type ContentfulQualificationsEdge = {
  __typename?: 'ContentfulQualificationsEdge';
  next?: Maybe<ContentfulQualifications>;
  node: ContentfulQualifications;
  previous?: Maybe<ContentfulQualifications>;
};

export enum ContentfulQualificationsFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Date = 'date',
  Comment = 'comment',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale'
}

export type ContentfulQualificationsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQualificationsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationsGroupConnection = {
  __typename?: 'ContentfulQualificationsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQualificationsEdge>;
  nodes: Array<ContentfulQualifications>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQualificationsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQualificationsSys = {
  __typename?: 'ContentfulQualificationsSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulQualificationsSysContentType>;
};

export type ContentfulQualificationsSysContentType = {
  __typename?: 'ContentfulQualificationsSysContentType';
  sys?: Maybe<ContentfulQualificationsSysContentTypeSys>;
};

export type ContentfulQualificationsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulQualificationsSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationsSysContentTypeSys = {
  __typename?: 'ContentfulQualificationsSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulQualificationsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationsSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulQualificationsSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  __typename?: 'ContentfulResize';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  __typename?: 'ContentfulResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulRole = Node & {
  __typename?: 'ContentfulRole';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<ContentfulProject>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulRoleSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulRoleCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulRoleUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulRoleConnection = {
  __typename?: 'ContentfulRoleConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulRoleEdge>;
  nodes: Array<ContentfulRole>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulRoleGroupConnection>;
};


export type ContentfulRoleConnectionDistinctArgs = {
  field: ContentfulRoleFieldsEnum;
};


export type ContentfulRoleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulRoleFieldsEnum;
};

export type ContentfulRoleEdge = {
  __typename?: 'ContentfulRoleEdge';
  next?: Maybe<ContentfulRole>;
  node: ContentfulRole;
  previous?: Maybe<ContentfulRole>;
};

export enum ContentfulRoleFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Project = 'project',
  ProjectId = 'project___id',
  ProjectParentId = 'project___parent___id',
  ProjectParentParentId = 'project___parent___parent___id',
  ProjectParentParentChildren = 'project___parent___parent___children',
  ProjectParentChildren = 'project___parent___children',
  ProjectParentChildrenId = 'project___parent___children___id',
  ProjectParentChildrenChildren = 'project___parent___children___children',
  ProjectParentInternalContent = 'project___parent___internal___content',
  ProjectParentInternalContentDigest = 'project___parent___internal___contentDigest',
  ProjectParentInternalDescription = 'project___parent___internal___description',
  ProjectParentInternalFieldOwners = 'project___parent___internal___fieldOwners',
  ProjectParentInternalIgnoreType = 'project___parent___internal___ignoreType',
  ProjectParentInternalMediaType = 'project___parent___internal___mediaType',
  ProjectParentInternalOwner = 'project___parent___internal___owner',
  ProjectParentInternalType = 'project___parent___internal___type',
  ProjectChildren = 'project___children',
  ProjectChildrenId = 'project___children___id',
  ProjectChildrenParentId = 'project___children___parent___id',
  ProjectChildrenParentChildren = 'project___children___parent___children',
  ProjectChildrenChildren = 'project___children___children',
  ProjectChildrenChildrenId = 'project___children___children___id',
  ProjectChildrenChildrenChildren = 'project___children___children___children',
  ProjectChildrenInternalContent = 'project___children___internal___content',
  ProjectChildrenInternalContentDigest = 'project___children___internal___contentDigest',
  ProjectChildrenInternalDescription = 'project___children___internal___description',
  ProjectChildrenInternalFieldOwners = 'project___children___internal___fieldOwners',
  ProjectChildrenInternalIgnoreType = 'project___children___internal___ignoreType',
  ProjectChildrenInternalMediaType = 'project___children___internal___mediaType',
  ProjectChildrenInternalOwner = 'project___children___internal___owner',
  ProjectChildrenInternalType = 'project___children___internal___type',
  ProjectInternalContent = 'project___internal___content',
  ProjectInternalContentDigest = 'project___internal___contentDigest',
  ProjectInternalDescription = 'project___internal___description',
  ProjectInternalFieldOwners = 'project___internal___fieldOwners',
  ProjectInternalIgnoreType = 'project___internal___ignoreType',
  ProjectInternalMediaType = 'project___internal___mediaType',
  ProjectInternalOwner = 'project___internal___owner',
  ProjectInternalType = 'project___internal___type',
  ProjectName = 'project___name',
  ProjectSlug = 'project___slug',
  ProjectStartDate = 'project___startDate',
  ProjectDuring = 'project___during',
  ProjectComment = 'project___comment',
  ProjectSiteUrl = 'project___siteUrl',
  ProjectSourceUrl = 'project___sourceUrl',
  ProjectMainImageId = 'project___mainImage___id',
  ProjectMainImageParentId = 'project___mainImage___parent___id',
  ProjectMainImageParentChildren = 'project___mainImage___parent___children',
  ProjectMainImageChildren = 'project___mainImage___children',
  ProjectMainImageChildrenId = 'project___mainImage___children___id',
  ProjectMainImageChildrenChildren = 'project___mainImage___children___children',
  ProjectMainImageInternalContent = 'project___mainImage___internal___content',
  ProjectMainImageInternalContentDigest = 'project___mainImage___internal___contentDigest',
  ProjectMainImageInternalDescription = 'project___mainImage___internal___description',
  ProjectMainImageInternalFieldOwners = 'project___mainImage___internal___fieldOwners',
  ProjectMainImageInternalIgnoreType = 'project___mainImage___internal___ignoreType',
  ProjectMainImageInternalMediaType = 'project___mainImage___internal___mediaType',
  ProjectMainImageInternalOwner = 'project___mainImage___internal___owner',
  ProjectMainImageInternalType = 'project___mainImage___internal___type',
  ProjectMainImageContentfulId = 'project___mainImage___contentful_id',
  ProjectMainImageSpaceId = 'project___mainImage___spaceId',
  ProjectMainImageCreatedAt = 'project___mainImage___createdAt',
  ProjectMainImageUpdatedAt = 'project___mainImage___updatedAt',
  ProjectMainImageFileUrl = 'project___mainImage___file___url',
  ProjectMainImageFileFileName = 'project___mainImage___file___fileName',
  ProjectMainImageFileContentType = 'project___mainImage___file___contentType',
  ProjectMainImageTitle = 'project___mainImage___title',
  ProjectMainImageDescription = 'project___mainImage___description',
  ProjectMainImageNodeLocale = 'project___mainImage___node_locale',
  ProjectMainImageSysRevision = 'project___mainImage___sys___revision',
  ProjectMainImageLocalFileSourceInstanceName = 'project___mainImage___localFile___sourceInstanceName',
  ProjectMainImageLocalFileAbsolutePath = 'project___mainImage___localFile___absolutePath',
  ProjectMainImageLocalFileRelativePath = 'project___mainImage___localFile___relativePath',
  ProjectMainImageLocalFileExtension = 'project___mainImage___localFile___extension',
  ProjectMainImageLocalFileSize = 'project___mainImage___localFile___size',
  ProjectMainImageLocalFilePrettySize = 'project___mainImage___localFile___prettySize',
  ProjectMainImageLocalFileModifiedTime = 'project___mainImage___localFile___modifiedTime',
  ProjectMainImageLocalFileAccessTime = 'project___mainImage___localFile___accessTime',
  ProjectMainImageLocalFileChangeTime = 'project___mainImage___localFile___changeTime',
  ProjectMainImageLocalFileBirthTime = 'project___mainImage___localFile___birthTime',
  ProjectMainImageLocalFileRoot = 'project___mainImage___localFile___root',
  ProjectMainImageLocalFileDir = 'project___mainImage___localFile___dir',
  ProjectMainImageLocalFileBase = 'project___mainImage___localFile___base',
  ProjectMainImageLocalFileExt = 'project___mainImage___localFile___ext',
  ProjectMainImageLocalFileName = 'project___mainImage___localFile___name',
  ProjectMainImageLocalFileRelativeDirectory = 'project___mainImage___localFile___relativeDirectory',
  ProjectMainImageLocalFileDev = 'project___mainImage___localFile___dev',
  ProjectMainImageLocalFileMode = 'project___mainImage___localFile___mode',
  ProjectMainImageLocalFileNlink = 'project___mainImage___localFile___nlink',
  ProjectMainImageLocalFileUid = 'project___mainImage___localFile___uid',
  ProjectMainImageLocalFileGid = 'project___mainImage___localFile___gid',
  ProjectMainImageLocalFileRdev = 'project___mainImage___localFile___rdev',
  ProjectMainImageLocalFileIno = 'project___mainImage___localFile___ino',
  ProjectMainImageLocalFileAtimeMs = 'project___mainImage___localFile___atimeMs',
  ProjectMainImageLocalFileMtimeMs = 'project___mainImage___localFile___mtimeMs',
  ProjectMainImageLocalFileCtimeMs = 'project___mainImage___localFile___ctimeMs',
  ProjectMainImageLocalFileAtime = 'project___mainImage___localFile___atime',
  ProjectMainImageLocalFileMtime = 'project___mainImage___localFile___mtime',
  ProjectMainImageLocalFileCtime = 'project___mainImage___localFile___ctime',
  ProjectMainImageLocalFileBirthtime = 'project___mainImage___localFile___birthtime',
  ProjectMainImageLocalFileBirthtimeMs = 'project___mainImage___localFile___birthtimeMs',
  ProjectMainImageLocalFileBlksize = 'project___mainImage___localFile___blksize',
  ProjectMainImageLocalFileBlocks = 'project___mainImage___localFile___blocks',
  ProjectMainImageLocalFileUrl = 'project___mainImage___localFile___url',
  ProjectMainImageLocalFileId = 'project___mainImage___localFile___id',
  ProjectMainImageLocalFileChildren = 'project___mainImage___localFile___children',
  ProjectMainImageFixedBase64 = 'project___mainImage___fixed___base64',
  ProjectMainImageFixedTracedSvg = 'project___mainImage___fixed___tracedSVG',
  ProjectMainImageFixedAspectRatio = 'project___mainImage___fixed___aspectRatio',
  ProjectMainImageFixedWidth = 'project___mainImage___fixed___width',
  ProjectMainImageFixedHeight = 'project___mainImage___fixed___height',
  ProjectMainImageFixedSrc = 'project___mainImage___fixed___src',
  ProjectMainImageFixedSrcSet = 'project___mainImage___fixed___srcSet',
  ProjectMainImageFixedSrcWebp = 'project___mainImage___fixed___srcWebp',
  ProjectMainImageFixedSrcSetWebp = 'project___mainImage___fixed___srcSetWebp',
  ProjectMainImageResolutionsBase64 = 'project___mainImage___resolutions___base64',
  ProjectMainImageResolutionsTracedSvg = 'project___mainImage___resolutions___tracedSVG',
  ProjectMainImageResolutionsAspectRatio = 'project___mainImage___resolutions___aspectRatio',
  ProjectMainImageResolutionsWidth = 'project___mainImage___resolutions___width',
  ProjectMainImageResolutionsHeight = 'project___mainImage___resolutions___height',
  ProjectMainImageResolutionsSrc = 'project___mainImage___resolutions___src',
  ProjectMainImageResolutionsSrcSet = 'project___mainImage___resolutions___srcSet',
  ProjectMainImageResolutionsSrcWebp = 'project___mainImage___resolutions___srcWebp',
  ProjectMainImageResolutionsSrcSetWebp = 'project___mainImage___resolutions___srcSetWebp',
  ProjectMainImageFluidBase64 = 'project___mainImage___fluid___base64',
  ProjectMainImageFluidTracedSvg = 'project___mainImage___fluid___tracedSVG',
  ProjectMainImageFluidAspectRatio = 'project___mainImage___fluid___aspectRatio',
  ProjectMainImageFluidSrc = 'project___mainImage___fluid___src',
  ProjectMainImageFluidSrcSet = 'project___mainImage___fluid___srcSet',
  ProjectMainImageFluidSrcWebp = 'project___mainImage___fluid___srcWebp',
  ProjectMainImageFluidSrcSetWebp = 'project___mainImage___fluid___srcSetWebp',
  ProjectMainImageFluidSizes = 'project___mainImage___fluid___sizes',
  ProjectMainImageSizesBase64 = 'project___mainImage___sizes___base64',
  ProjectMainImageSizesTracedSvg = 'project___mainImage___sizes___tracedSVG',
  ProjectMainImageSizesAspectRatio = 'project___mainImage___sizes___aspectRatio',
  ProjectMainImageSizesSrc = 'project___mainImage___sizes___src',
  ProjectMainImageSizesSrcSet = 'project___mainImage___sizes___srcSet',
  ProjectMainImageSizesSrcWebp = 'project___mainImage___sizes___srcWebp',
  ProjectMainImageSizesSrcSetWebp = 'project___mainImage___sizes___srcSetWebp',
  ProjectMainImageSizesSizes = 'project___mainImage___sizes___sizes',
  ProjectMainImageResizeBase64 = 'project___mainImage___resize___base64',
  ProjectMainImageResizeTracedSvg = 'project___mainImage___resize___tracedSVG',
  ProjectMainImageResizeSrc = 'project___mainImage___resize___src',
  ProjectMainImageResizeWidth = 'project___mainImage___resize___width',
  ProjectMainImageResizeHeight = 'project___mainImage___resize___height',
  ProjectMainImageResizeAspectRatio = 'project___mainImage___resize___aspectRatio',
  ProjectRole = 'project___role',
  ProjectRoleId = 'project___role___id',
  ProjectRoleParentId = 'project___role___parent___id',
  ProjectRoleParentChildren = 'project___role___parent___children',
  ProjectRoleChildren = 'project___role___children',
  ProjectRoleChildrenId = 'project___role___children___id',
  ProjectRoleChildrenChildren = 'project___role___children___children',
  ProjectRoleInternalContent = 'project___role___internal___content',
  ProjectRoleInternalContentDigest = 'project___role___internal___contentDigest',
  ProjectRoleInternalDescription = 'project___role___internal___description',
  ProjectRoleInternalFieldOwners = 'project___role___internal___fieldOwners',
  ProjectRoleInternalIgnoreType = 'project___role___internal___ignoreType',
  ProjectRoleInternalMediaType = 'project___role___internal___mediaType',
  ProjectRoleInternalOwner = 'project___role___internal___owner',
  ProjectRoleInternalType = 'project___role___internal___type',
  ProjectRoleName = 'project___role___name',
  ProjectRoleProject = 'project___role___project',
  ProjectRoleProjectId = 'project___role___project___id',
  ProjectRoleProjectChildren = 'project___role___project___children',
  ProjectRoleProjectName = 'project___role___project___name',
  ProjectRoleProjectSlug = 'project___role___project___slug',
  ProjectRoleProjectStartDate = 'project___role___project___startDate',
  ProjectRoleProjectDuring = 'project___role___project___during',
  ProjectRoleProjectComment = 'project___role___project___comment',
  ProjectRoleProjectSiteUrl = 'project___role___project___siteUrl',
  ProjectRoleProjectSourceUrl = 'project___role___project___sourceUrl',
  ProjectRoleProjectRole = 'project___role___project___role',
  ProjectRoleProjectAssigne = 'project___role___project___assigne',
  ProjectRoleProjectSystem = 'project___role___project___system',
  ProjectRoleProjectLanguage = 'project___role___project___language',
  ProjectRoleProjectTools = 'project___role___project___tools',
  ProjectRoleProjectSpaceId = 'project___role___project___spaceId',
  ProjectRoleProjectContentfulId = 'project___role___project___contentful_id',
  ProjectRoleProjectCreatedAt = 'project___role___project___createdAt',
  ProjectRoleProjectUpdatedAt = 'project___role___project___updatedAt',
  ProjectRoleProjectNodeLocale = 'project___role___project___node_locale',
  ProjectRoleSpaceId = 'project___role___spaceId',
  ProjectRoleContentfulId = 'project___role___contentful_id',
  ProjectRoleCreatedAt = 'project___role___createdAt',
  ProjectRoleUpdatedAt = 'project___role___updatedAt',
  ProjectRoleSysRevision = 'project___role___sys___revision',
  ProjectRoleNodeLocale = 'project___role___node_locale',
  ProjectAssigne = 'project___assigne',
  ProjectAssigneId = 'project___assigne___id',
  ProjectAssigneParentId = 'project___assigne___parent___id',
  ProjectAssigneParentChildren = 'project___assigne___parent___children',
  ProjectAssigneChildren = 'project___assigne___children',
  ProjectAssigneChildrenId = 'project___assigne___children___id',
  ProjectAssigneChildrenChildren = 'project___assigne___children___children',
  ProjectAssigneInternalContent = 'project___assigne___internal___content',
  ProjectAssigneInternalContentDigest = 'project___assigne___internal___contentDigest',
  ProjectAssigneInternalDescription = 'project___assigne___internal___description',
  ProjectAssigneInternalFieldOwners = 'project___assigne___internal___fieldOwners',
  ProjectAssigneInternalIgnoreType = 'project___assigne___internal___ignoreType',
  ProjectAssigneInternalMediaType = 'project___assigne___internal___mediaType',
  ProjectAssigneInternalOwner = 'project___assigne___internal___owner',
  ProjectAssigneInternalType = 'project___assigne___internal___type',
  ProjectAssigneName = 'project___assigne___name',
  ProjectAssigneProject = 'project___assigne___project',
  ProjectAssigneProjectId = 'project___assigne___project___id',
  ProjectAssigneProjectChildren = 'project___assigne___project___children',
  ProjectAssigneProjectName = 'project___assigne___project___name',
  ProjectAssigneProjectSlug = 'project___assigne___project___slug',
  ProjectAssigneProjectStartDate = 'project___assigne___project___startDate',
  ProjectAssigneProjectDuring = 'project___assigne___project___during',
  ProjectAssigneProjectComment = 'project___assigne___project___comment',
  ProjectAssigneProjectSiteUrl = 'project___assigne___project___siteUrl',
  ProjectAssigneProjectSourceUrl = 'project___assigne___project___sourceUrl',
  ProjectAssigneProjectRole = 'project___assigne___project___role',
  ProjectAssigneProjectAssigne = 'project___assigne___project___assigne',
  ProjectAssigneProjectSystem = 'project___assigne___project___system',
  ProjectAssigneProjectLanguage = 'project___assigne___project___language',
  ProjectAssigneProjectTools = 'project___assigne___project___tools',
  ProjectAssigneProjectSpaceId = 'project___assigne___project___spaceId',
  ProjectAssigneProjectContentfulId = 'project___assigne___project___contentful_id',
  ProjectAssigneProjectCreatedAt = 'project___assigne___project___createdAt',
  ProjectAssigneProjectUpdatedAt = 'project___assigne___project___updatedAt',
  ProjectAssigneProjectNodeLocale = 'project___assigne___project___node_locale',
  ProjectAssigneSpaceId = 'project___assigne___spaceId',
  ProjectAssigneContentfulId = 'project___assigne___contentful_id',
  ProjectAssigneCreatedAt = 'project___assigne___createdAt',
  ProjectAssigneUpdatedAt = 'project___assigne___updatedAt',
  ProjectAssigneSysRevision = 'project___assigne___sys___revision',
  ProjectAssigneNodeLocale = 'project___assigne___node_locale',
  ProjectSystem = 'project___system',
  ProjectSystemId = 'project___system___id',
  ProjectSystemParentId = 'project___system___parent___id',
  ProjectSystemParentChildren = 'project___system___parent___children',
  ProjectSystemChildren = 'project___system___children',
  ProjectSystemChildrenId = 'project___system___children___id',
  ProjectSystemChildrenChildren = 'project___system___children___children',
  ProjectSystemInternalContent = 'project___system___internal___content',
  ProjectSystemInternalContentDigest = 'project___system___internal___contentDigest',
  ProjectSystemInternalDescription = 'project___system___internal___description',
  ProjectSystemInternalFieldOwners = 'project___system___internal___fieldOwners',
  ProjectSystemInternalIgnoreType = 'project___system___internal___ignoreType',
  ProjectSystemInternalMediaType = 'project___system___internal___mediaType',
  ProjectSystemInternalOwner = 'project___system___internal___owner',
  ProjectSystemInternalType = 'project___system___internal___type',
  ProjectSystemName = 'project___system___name',
  ProjectSystemLevel = 'project___system___level',
  ProjectSystemProject = 'project___system___project',
  ProjectSystemProjectId = 'project___system___project___id',
  ProjectSystemProjectChildren = 'project___system___project___children',
  ProjectSystemProjectName = 'project___system___project___name',
  ProjectSystemProjectSlug = 'project___system___project___slug',
  ProjectSystemProjectStartDate = 'project___system___project___startDate',
  ProjectSystemProjectDuring = 'project___system___project___during',
  ProjectSystemProjectComment = 'project___system___project___comment',
  ProjectSystemProjectSiteUrl = 'project___system___project___siteUrl',
  ProjectSystemProjectSourceUrl = 'project___system___project___sourceUrl',
  ProjectSystemProjectRole = 'project___system___project___role',
  ProjectSystemProjectAssigne = 'project___system___project___assigne',
  ProjectSystemProjectSystem = 'project___system___project___system',
  ProjectSystemProjectLanguage = 'project___system___project___language',
  ProjectSystemProjectTools = 'project___system___project___tools',
  ProjectSystemProjectSpaceId = 'project___system___project___spaceId',
  ProjectSystemProjectContentfulId = 'project___system___project___contentful_id',
  ProjectSystemProjectCreatedAt = 'project___system___project___createdAt',
  ProjectSystemProjectUpdatedAt = 'project___system___project___updatedAt',
  ProjectSystemProjectNodeLocale = 'project___system___project___node_locale',
  ProjectSystemSpaceId = 'project___system___spaceId',
  ProjectSystemContentfulId = 'project___system___contentful_id',
  ProjectSystemCreatedAt = 'project___system___createdAt',
  ProjectSystemUpdatedAt = 'project___system___updatedAt',
  ProjectSystemSysRevision = 'project___system___sys___revision',
  ProjectSystemNodeLocale = 'project___system___node_locale',
  ProjectSystemSkillmap = 'project___system___skillmap',
  ProjectSystemSkillmapId = 'project___system___skillmap___id',
  ProjectSystemSkillmapChildren = 'project___system___skillmap___children',
  ProjectSystemSkillmapName = 'project___system___skillmap___name',
  ProjectSystemSkillmapSkills = 'project___system___skillmap___skills',
  ProjectSystemSkillmapSpaceId = 'project___system___skillmap___spaceId',
  ProjectSystemSkillmapContentfulId = 'project___system___skillmap___contentful_id',
  ProjectSystemSkillmapCreatedAt = 'project___system___skillmap___createdAt',
  ProjectSystemSkillmapUpdatedAt = 'project___system___skillmap___updatedAt',
  ProjectSystemSkillmapNodeLocale = 'project___system___skillmap___node_locale',
  ProjectLanguage = 'project___language',
  ProjectLanguageId = 'project___language___id',
  ProjectLanguageParentId = 'project___language___parent___id',
  ProjectLanguageParentChildren = 'project___language___parent___children',
  ProjectLanguageChildren = 'project___language___children',
  ProjectLanguageChildrenId = 'project___language___children___id',
  ProjectLanguageChildrenChildren = 'project___language___children___children',
  ProjectLanguageInternalContent = 'project___language___internal___content',
  ProjectLanguageInternalContentDigest = 'project___language___internal___contentDigest',
  ProjectLanguageInternalDescription = 'project___language___internal___description',
  ProjectLanguageInternalFieldOwners = 'project___language___internal___fieldOwners',
  ProjectLanguageInternalIgnoreType = 'project___language___internal___ignoreType',
  ProjectLanguageInternalMediaType = 'project___language___internal___mediaType',
  ProjectLanguageInternalOwner = 'project___language___internal___owner',
  ProjectLanguageInternalType = 'project___language___internal___type',
  ProjectLanguageName = 'project___language___name',
  ProjectLanguageLevel = 'project___language___level',
  ProjectLanguageProject = 'project___language___project',
  ProjectLanguageProjectId = 'project___language___project___id',
  ProjectLanguageProjectChildren = 'project___language___project___children',
  ProjectLanguageProjectName = 'project___language___project___name',
  ProjectLanguageProjectSlug = 'project___language___project___slug',
  ProjectLanguageProjectStartDate = 'project___language___project___startDate',
  ProjectLanguageProjectDuring = 'project___language___project___during',
  ProjectLanguageProjectComment = 'project___language___project___comment',
  ProjectLanguageProjectSiteUrl = 'project___language___project___siteUrl',
  ProjectLanguageProjectSourceUrl = 'project___language___project___sourceUrl',
  ProjectLanguageProjectRole = 'project___language___project___role',
  ProjectLanguageProjectAssigne = 'project___language___project___assigne',
  ProjectLanguageProjectSystem = 'project___language___project___system',
  ProjectLanguageProjectLanguage = 'project___language___project___language',
  ProjectLanguageProjectTools = 'project___language___project___tools',
  ProjectLanguageProjectSpaceId = 'project___language___project___spaceId',
  ProjectLanguageProjectContentfulId = 'project___language___project___contentful_id',
  ProjectLanguageProjectCreatedAt = 'project___language___project___createdAt',
  ProjectLanguageProjectUpdatedAt = 'project___language___project___updatedAt',
  ProjectLanguageProjectNodeLocale = 'project___language___project___node_locale',
  ProjectLanguageSpaceId = 'project___language___spaceId',
  ProjectLanguageContentfulId = 'project___language___contentful_id',
  ProjectLanguageCreatedAt = 'project___language___createdAt',
  ProjectLanguageUpdatedAt = 'project___language___updatedAt',
  ProjectLanguageSysRevision = 'project___language___sys___revision',
  ProjectLanguageNodeLocale = 'project___language___node_locale',
  ProjectLanguageSkillmap = 'project___language___skillmap',
  ProjectLanguageSkillmapId = 'project___language___skillmap___id',
  ProjectLanguageSkillmapChildren = 'project___language___skillmap___children',
  ProjectLanguageSkillmapName = 'project___language___skillmap___name',
  ProjectLanguageSkillmapSkills = 'project___language___skillmap___skills',
  ProjectLanguageSkillmapSpaceId = 'project___language___skillmap___spaceId',
  ProjectLanguageSkillmapContentfulId = 'project___language___skillmap___contentful_id',
  ProjectLanguageSkillmapCreatedAt = 'project___language___skillmap___createdAt',
  ProjectLanguageSkillmapUpdatedAt = 'project___language___skillmap___updatedAt',
  ProjectLanguageSkillmapNodeLocale = 'project___language___skillmap___node_locale',
  ProjectTools = 'project___tools',
  ProjectToolsId = 'project___tools___id',
  ProjectToolsParentId = 'project___tools___parent___id',
  ProjectToolsParentChildren = 'project___tools___parent___children',
  ProjectToolsChildren = 'project___tools___children',
  ProjectToolsChildrenId = 'project___tools___children___id',
  ProjectToolsChildrenChildren = 'project___tools___children___children',
  ProjectToolsInternalContent = 'project___tools___internal___content',
  ProjectToolsInternalContentDigest = 'project___tools___internal___contentDigest',
  ProjectToolsInternalDescription = 'project___tools___internal___description',
  ProjectToolsInternalFieldOwners = 'project___tools___internal___fieldOwners',
  ProjectToolsInternalIgnoreType = 'project___tools___internal___ignoreType',
  ProjectToolsInternalMediaType = 'project___tools___internal___mediaType',
  ProjectToolsInternalOwner = 'project___tools___internal___owner',
  ProjectToolsInternalType = 'project___tools___internal___type',
  ProjectToolsName = 'project___tools___name',
  ProjectToolsLevel = 'project___tools___level',
  ProjectToolsProject = 'project___tools___project',
  ProjectToolsProjectId = 'project___tools___project___id',
  ProjectToolsProjectChildren = 'project___tools___project___children',
  ProjectToolsProjectName = 'project___tools___project___name',
  ProjectToolsProjectSlug = 'project___tools___project___slug',
  ProjectToolsProjectStartDate = 'project___tools___project___startDate',
  ProjectToolsProjectDuring = 'project___tools___project___during',
  ProjectToolsProjectComment = 'project___tools___project___comment',
  ProjectToolsProjectSiteUrl = 'project___tools___project___siteUrl',
  ProjectToolsProjectSourceUrl = 'project___tools___project___sourceUrl',
  ProjectToolsProjectRole = 'project___tools___project___role',
  ProjectToolsProjectAssigne = 'project___tools___project___assigne',
  ProjectToolsProjectSystem = 'project___tools___project___system',
  ProjectToolsProjectLanguage = 'project___tools___project___language',
  ProjectToolsProjectTools = 'project___tools___project___tools',
  ProjectToolsProjectSpaceId = 'project___tools___project___spaceId',
  ProjectToolsProjectContentfulId = 'project___tools___project___contentful_id',
  ProjectToolsProjectCreatedAt = 'project___tools___project___createdAt',
  ProjectToolsProjectUpdatedAt = 'project___tools___project___updatedAt',
  ProjectToolsProjectNodeLocale = 'project___tools___project___node_locale',
  ProjectToolsSpaceId = 'project___tools___spaceId',
  ProjectToolsContentfulId = 'project___tools___contentful_id',
  ProjectToolsCreatedAt = 'project___tools___createdAt',
  ProjectToolsUpdatedAt = 'project___tools___updatedAt',
  ProjectToolsSysRevision = 'project___tools___sys___revision',
  ProjectToolsNodeLocale = 'project___tools___node_locale',
  ProjectToolsSkillmap = 'project___tools___skillmap',
  ProjectToolsSkillmapId = 'project___tools___skillmap___id',
  ProjectToolsSkillmapChildren = 'project___tools___skillmap___children',
  ProjectToolsSkillmapName = 'project___tools___skillmap___name',
  ProjectToolsSkillmapSkills = 'project___tools___skillmap___skills',
  ProjectToolsSkillmapSpaceId = 'project___tools___skillmap___spaceId',
  ProjectToolsSkillmapContentfulId = 'project___tools___skillmap___contentful_id',
  ProjectToolsSkillmapCreatedAt = 'project___tools___skillmap___createdAt',
  ProjectToolsSkillmapUpdatedAt = 'project___tools___skillmap___updatedAt',
  ProjectToolsSkillmapNodeLocale = 'project___tools___skillmap___node_locale',
  ProjectSpaceId = 'project___spaceId',
  ProjectContentfulId = 'project___contentful_id',
  ProjectCreatedAt = 'project___createdAt',
  ProjectUpdatedAt = 'project___updatedAt',
  ProjectSysRevision = 'project___sys___revision',
  ProjectNodeLocale = 'project___node_locale',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale'
}

export type ContentfulRoleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulRoleSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulRoleFilterListInput = {
  elemMatch?: Maybe<ContentfulRoleFilterInput>;
};

export type ContentfulRoleGroupConnection = {
  __typename?: 'ContentfulRoleGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulRoleEdge>;
  nodes: Array<ContentfulRole>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulRoleSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulRoleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulRoleSys = {
  __typename?: 'ContentfulRoleSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulRoleSysContentType>;
};

export type ContentfulRoleSysContentType = {
  __typename?: 'ContentfulRoleSysContentType';
  sys?: Maybe<ContentfulRoleSysContentTypeSys>;
};

export type ContentfulRoleSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulRoleSysContentTypeSysFilterInput>;
};

export type ContentfulRoleSysContentTypeSys = {
  __typename?: 'ContentfulRoleSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulRoleSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulRoleSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulRoleSysContentTypeFilterInput>;
};

export type ContentfulSizes = {
  __typename?: 'ContentfulSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSkill = Node & {
  __typename?: 'ContentfulSkill';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  project?: Maybe<Array<Maybe<ContentfulProject>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSkillSys>;
  node_locale?: Maybe<Scalars['String']>;
  skillmap?: Maybe<Array<Maybe<ContentfulSkillMap>>>;
};


export type ContentfulSkillCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSkillUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSkillConnection = {
  __typename?: 'ContentfulSkillConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillEdge>;
  nodes: Array<ContentfulSkill>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSkillGroupConnection>;
};


export type ContentfulSkillConnectionDistinctArgs = {
  field: ContentfulSkillFieldsEnum;
};


export type ContentfulSkillConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSkillFieldsEnum;
};

export type ContentfulSkillEdge = {
  __typename?: 'ContentfulSkillEdge';
  next?: Maybe<ContentfulSkill>;
  node: ContentfulSkill;
  previous?: Maybe<ContentfulSkill>;
};

export enum ContentfulSkillFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Level = 'level',
  Project = 'project',
  ProjectId = 'project___id',
  ProjectParentId = 'project___parent___id',
  ProjectParentParentId = 'project___parent___parent___id',
  ProjectParentParentChildren = 'project___parent___parent___children',
  ProjectParentChildren = 'project___parent___children',
  ProjectParentChildrenId = 'project___parent___children___id',
  ProjectParentChildrenChildren = 'project___parent___children___children',
  ProjectParentInternalContent = 'project___parent___internal___content',
  ProjectParentInternalContentDigest = 'project___parent___internal___contentDigest',
  ProjectParentInternalDescription = 'project___parent___internal___description',
  ProjectParentInternalFieldOwners = 'project___parent___internal___fieldOwners',
  ProjectParentInternalIgnoreType = 'project___parent___internal___ignoreType',
  ProjectParentInternalMediaType = 'project___parent___internal___mediaType',
  ProjectParentInternalOwner = 'project___parent___internal___owner',
  ProjectParentInternalType = 'project___parent___internal___type',
  ProjectChildren = 'project___children',
  ProjectChildrenId = 'project___children___id',
  ProjectChildrenParentId = 'project___children___parent___id',
  ProjectChildrenParentChildren = 'project___children___parent___children',
  ProjectChildrenChildren = 'project___children___children',
  ProjectChildrenChildrenId = 'project___children___children___id',
  ProjectChildrenChildrenChildren = 'project___children___children___children',
  ProjectChildrenInternalContent = 'project___children___internal___content',
  ProjectChildrenInternalContentDigest = 'project___children___internal___contentDigest',
  ProjectChildrenInternalDescription = 'project___children___internal___description',
  ProjectChildrenInternalFieldOwners = 'project___children___internal___fieldOwners',
  ProjectChildrenInternalIgnoreType = 'project___children___internal___ignoreType',
  ProjectChildrenInternalMediaType = 'project___children___internal___mediaType',
  ProjectChildrenInternalOwner = 'project___children___internal___owner',
  ProjectChildrenInternalType = 'project___children___internal___type',
  ProjectInternalContent = 'project___internal___content',
  ProjectInternalContentDigest = 'project___internal___contentDigest',
  ProjectInternalDescription = 'project___internal___description',
  ProjectInternalFieldOwners = 'project___internal___fieldOwners',
  ProjectInternalIgnoreType = 'project___internal___ignoreType',
  ProjectInternalMediaType = 'project___internal___mediaType',
  ProjectInternalOwner = 'project___internal___owner',
  ProjectInternalType = 'project___internal___type',
  ProjectName = 'project___name',
  ProjectSlug = 'project___slug',
  ProjectStartDate = 'project___startDate',
  ProjectDuring = 'project___during',
  ProjectComment = 'project___comment',
  ProjectSiteUrl = 'project___siteUrl',
  ProjectSourceUrl = 'project___sourceUrl',
  ProjectMainImageId = 'project___mainImage___id',
  ProjectMainImageParentId = 'project___mainImage___parent___id',
  ProjectMainImageParentChildren = 'project___mainImage___parent___children',
  ProjectMainImageChildren = 'project___mainImage___children',
  ProjectMainImageChildrenId = 'project___mainImage___children___id',
  ProjectMainImageChildrenChildren = 'project___mainImage___children___children',
  ProjectMainImageInternalContent = 'project___mainImage___internal___content',
  ProjectMainImageInternalContentDigest = 'project___mainImage___internal___contentDigest',
  ProjectMainImageInternalDescription = 'project___mainImage___internal___description',
  ProjectMainImageInternalFieldOwners = 'project___mainImage___internal___fieldOwners',
  ProjectMainImageInternalIgnoreType = 'project___mainImage___internal___ignoreType',
  ProjectMainImageInternalMediaType = 'project___mainImage___internal___mediaType',
  ProjectMainImageInternalOwner = 'project___mainImage___internal___owner',
  ProjectMainImageInternalType = 'project___mainImage___internal___type',
  ProjectMainImageContentfulId = 'project___mainImage___contentful_id',
  ProjectMainImageSpaceId = 'project___mainImage___spaceId',
  ProjectMainImageCreatedAt = 'project___mainImage___createdAt',
  ProjectMainImageUpdatedAt = 'project___mainImage___updatedAt',
  ProjectMainImageFileUrl = 'project___mainImage___file___url',
  ProjectMainImageFileFileName = 'project___mainImage___file___fileName',
  ProjectMainImageFileContentType = 'project___mainImage___file___contentType',
  ProjectMainImageTitle = 'project___mainImage___title',
  ProjectMainImageDescription = 'project___mainImage___description',
  ProjectMainImageNodeLocale = 'project___mainImage___node_locale',
  ProjectMainImageSysRevision = 'project___mainImage___sys___revision',
  ProjectMainImageLocalFileSourceInstanceName = 'project___mainImage___localFile___sourceInstanceName',
  ProjectMainImageLocalFileAbsolutePath = 'project___mainImage___localFile___absolutePath',
  ProjectMainImageLocalFileRelativePath = 'project___mainImage___localFile___relativePath',
  ProjectMainImageLocalFileExtension = 'project___mainImage___localFile___extension',
  ProjectMainImageLocalFileSize = 'project___mainImage___localFile___size',
  ProjectMainImageLocalFilePrettySize = 'project___mainImage___localFile___prettySize',
  ProjectMainImageLocalFileModifiedTime = 'project___mainImage___localFile___modifiedTime',
  ProjectMainImageLocalFileAccessTime = 'project___mainImage___localFile___accessTime',
  ProjectMainImageLocalFileChangeTime = 'project___mainImage___localFile___changeTime',
  ProjectMainImageLocalFileBirthTime = 'project___mainImage___localFile___birthTime',
  ProjectMainImageLocalFileRoot = 'project___mainImage___localFile___root',
  ProjectMainImageLocalFileDir = 'project___mainImage___localFile___dir',
  ProjectMainImageLocalFileBase = 'project___mainImage___localFile___base',
  ProjectMainImageLocalFileExt = 'project___mainImage___localFile___ext',
  ProjectMainImageLocalFileName = 'project___mainImage___localFile___name',
  ProjectMainImageLocalFileRelativeDirectory = 'project___mainImage___localFile___relativeDirectory',
  ProjectMainImageLocalFileDev = 'project___mainImage___localFile___dev',
  ProjectMainImageLocalFileMode = 'project___mainImage___localFile___mode',
  ProjectMainImageLocalFileNlink = 'project___mainImage___localFile___nlink',
  ProjectMainImageLocalFileUid = 'project___mainImage___localFile___uid',
  ProjectMainImageLocalFileGid = 'project___mainImage___localFile___gid',
  ProjectMainImageLocalFileRdev = 'project___mainImage___localFile___rdev',
  ProjectMainImageLocalFileIno = 'project___mainImage___localFile___ino',
  ProjectMainImageLocalFileAtimeMs = 'project___mainImage___localFile___atimeMs',
  ProjectMainImageLocalFileMtimeMs = 'project___mainImage___localFile___mtimeMs',
  ProjectMainImageLocalFileCtimeMs = 'project___mainImage___localFile___ctimeMs',
  ProjectMainImageLocalFileAtime = 'project___mainImage___localFile___atime',
  ProjectMainImageLocalFileMtime = 'project___mainImage___localFile___mtime',
  ProjectMainImageLocalFileCtime = 'project___mainImage___localFile___ctime',
  ProjectMainImageLocalFileBirthtime = 'project___mainImage___localFile___birthtime',
  ProjectMainImageLocalFileBirthtimeMs = 'project___mainImage___localFile___birthtimeMs',
  ProjectMainImageLocalFileBlksize = 'project___mainImage___localFile___blksize',
  ProjectMainImageLocalFileBlocks = 'project___mainImage___localFile___blocks',
  ProjectMainImageLocalFileUrl = 'project___mainImage___localFile___url',
  ProjectMainImageLocalFileId = 'project___mainImage___localFile___id',
  ProjectMainImageLocalFileChildren = 'project___mainImage___localFile___children',
  ProjectMainImageFixedBase64 = 'project___mainImage___fixed___base64',
  ProjectMainImageFixedTracedSvg = 'project___mainImage___fixed___tracedSVG',
  ProjectMainImageFixedAspectRatio = 'project___mainImage___fixed___aspectRatio',
  ProjectMainImageFixedWidth = 'project___mainImage___fixed___width',
  ProjectMainImageFixedHeight = 'project___mainImage___fixed___height',
  ProjectMainImageFixedSrc = 'project___mainImage___fixed___src',
  ProjectMainImageFixedSrcSet = 'project___mainImage___fixed___srcSet',
  ProjectMainImageFixedSrcWebp = 'project___mainImage___fixed___srcWebp',
  ProjectMainImageFixedSrcSetWebp = 'project___mainImage___fixed___srcSetWebp',
  ProjectMainImageResolutionsBase64 = 'project___mainImage___resolutions___base64',
  ProjectMainImageResolutionsTracedSvg = 'project___mainImage___resolutions___tracedSVG',
  ProjectMainImageResolutionsAspectRatio = 'project___mainImage___resolutions___aspectRatio',
  ProjectMainImageResolutionsWidth = 'project___mainImage___resolutions___width',
  ProjectMainImageResolutionsHeight = 'project___mainImage___resolutions___height',
  ProjectMainImageResolutionsSrc = 'project___mainImage___resolutions___src',
  ProjectMainImageResolutionsSrcSet = 'project___mainImage___resolutions___srcSet',
  ProjectMainImageResolutionsSrcWebp = 'project___mainImage___resolutions___srcWebp',
  ProjectMainImageResolutionsSrcSetWebp = 'project___mainImage___resolutions___srcSetWebp',
  ProjectMainImageFluidBase64 = 'project___mainImage___fluid___base64',
  ProjectMainImageFluidTracedSvg = 'project___mainImage___fluid___tracedSVG',
  ProjectMainImageFluidAspectRatio = 'project___mainImage___fluid___aspectRatio',
  ProjectMainImageFluidSrc = 'project___mainImage___fluid___src',
  ProjectMainImageFluidSrcSet = 'project___mainImage___fluid___srcSet',
  ProjectMainImageFluidSrcWebp = 'project___mainImage___fluid___srcWebp',
  ProjectMainImageFluidSrcSetWebp = 'project___mainImage___fluid___srcSetWebp',
  ProjectMainImageFluidSizes = 'project___mainImage___fluid___sizes',
  ProjectMainImageSizesBase64 = 'project___mainImage___sizes___base64',
  ProjectMainImageSizesTracedSvg = 'project___mainImage___sizes___tracedSVG',
  ProjectMainImageSizesAspectRatio = 'project___mainImage___sizes___aspectRatio',
  ProjectMainImageSizesSrc = 'project___mainImage___sizes___src',
  ProjectMainImageSizesSrcSet = 'project___mainImage___sizes___srcSet',
  ProjectMainImageSizesSrcWebp = 'project___mainImage___sizes___srcWebp',
  ProjectMainImageSizesSrcSetWebp = 'project___mainImage___sizes___srcSetWebp',
  ProjectMainImageSizesSizes = 'project___mainImage___sizes___sizes',
  ProjectMainImageResizeBase64 = 'project___mainImage___resize___base64',
  ProjectMainImageResizeTracedSvg = 'project___mainImage___resize___tracedSVG',
  ProjectMainImageResizeSrc = 'project___mainImage___resize___src',
  ProjectMainImageResizeWidth = 'project___mainImage___resize___width',
  ProjectMainImageResizeHeight = 'project___mainImage___resize___height',
  ProjectMainImageResizeAspectRatio = 'project___mainImage___resize___aspectRatio',
  ProjectRole = 'project___role',
  ProjectRoleId = 'project___role___id',
  ProjectRoleParentId = 'project___role___parent___id',
  ProjectRoleParentChildren = 'project___role___parent___children',
  ProjectRoleChildren = 'project___role___children',
  ProjectRoleChildrenId = 'project___role___children___id',
  ProjectRoleChildrenChildren = 'project___role___children___children',
  ProjectRoleInternalContent = 'project___role___internal___content',
  ProjectRoleInternalContentDigest = 'project___role___internal___contentDigest',
  ProjectRoleInternalDescription = 'project___role___internal___description',
  ProjectRoleInternalFieldOwners = 'project___role___internal___fieldOwners',
  ProjectRoleInternalIgnoreType = 'project___role___internal___ignoreType',
  ProjectRoleInternalMediaType = 'project___role___internal___mediaType',
  ProjectRoleInternalOwner = 'project___role___internal___owner',
  ProjectRoleInternalType = 'project___role___internal___type',
  ProjectRoleName = 'project___role___name',
  ProjectRoleProject = 'project___role___project',
  ProjectRoleProjectId = 'project___role___project___id',
  ProjectRoleProjectChildren = 'project___role___project___children',
  ProjectRoleProjectName = 'project___role___project___name',
  ProjectRoleProjectSlug = 'project___role___project___slug',
  ProjectRoleProjectStartDate = 'project___role___project___startDate',
  ProjectRoleProjectDuring = 'project___role___project___during',
  ProjectRoleProjectComment = 'project___role___project___comment',
  ProjectRoleProjectSiteUrl = 'project___role___project___siteUrl',
  ProjectRoleProjectSourceUrl = 'project___role___project___sourceUrl',
  ProjectRoleProjectRole = 'project___role___project___role',
  ProjectRoleProjectAssigne = 'project___role___project___assigne',
  ProjectRoleProjectSystem = 'project___role___project___system',
  ProjectRoleProjectLanguage = 'project___role___project___language',
  ProjectRoleProjectTools = 'project___role___project___tools',
  ProjectRoleProjectSpaceId = 'project___role___project___spaceId',
  ProjectRoleProjectContentfulId = 'project___role___project___contentful_id',
  ProjectRoleProjectCreatedAt = 'project___role___project___createdAt',
  ProjectRoleProjectUpdatedAt = 'project___role___project___updatedAt',
  ProjectRoleProjectNodeLocale = 'project___role___project___node_locale',
  ProjectRoleSpaceId = 'project___role___spaceId',
  ProjectRoleContentfulId = 'project___role___contentful_id',
  ProjectRoleCreatedAt = 'project___role___createdAt',
  ProjectRoleUpdatedAt = 'project___role___updatedAt',
  ProjectRoleSysRevision = 'project___role___sys___revision',
  ProjectRoleNodeLocale = 'project___role___node_locale',
  ProjectAssigne = 'project___assigne',
  ProjectAssigneId = 'project___assigne___id',
  ProjectAssigneParentId = 'project___assigne___parent___id',
  ProjectAssigneParentChildren = 'project___assigne___parent___children',
  ProjectAssigneChildren = 'project___assigne___children',
  ProjectAssigneChildrenId = 'project___assigne___children___id',
  ProjectAssigneChildrenChildren = 'project___assigne___children___children',
  ProjectAssigneInternalContent = 'project___assigne___internal___content',
  ProjectAssigneInternalContentDigest = 'project___assigne___internal___contentDigest',
  ProjectAssigneInternalDescription = 'project___assigne___internal___description',
  ProjectAssigneInternalFieldOwners = 'project___assigne___internal___fieldOwners',
  ProjectAssigneInternalIgnoreType = 'project___assigne___internal___ignoreType',
  ProjectAssigneInternalMediaType = 'project___assigne___internal___mediaType',
  ProjectAssigneInternalOwner = 'project___assigne___internal___owner',
  ProjectAssigneInternalType = 'project___assigne___internal___type',
  ProjectAssigneName = 'project___assigne___name',
  ProjectAssigneProject = 'project___assigne___project',
  ProjectAssigneProjectId = 'project___assigne___project___id',
  ProjectAssigneProjectChildren = 'project___assigne___project___children',
  ProjectAssigneProjectName = 'project___assigne___project___name',
  ProjectAssigneProjectSlug = 'project___assigne___project___slug',
  ProjectAssigneProjectStartDate = 'project___assigne___project___startDate',
  ProjectAssigneProjectDuring = 'project___assigne___project___during',
  ProjectAssigneProjectComment = 'project___assigne___project___comment',
  ProjectAssigneProjectSiteUrl = 'project___assigne___project___siteUrl',
  ProjectAssigneProjectSourceUrl = 'project___assigne___project___sourceUrl',
  ProjectAssigneProjectRole = 'project___assigne___project___role',
  ProjectAssigneProjectAssigne = 'project___assigne___project___assigne',
  ProjectAssigneProjectSystem = 'project___assigne___project___system',
  ProjectAssigneProjectLanguage = 'project___assigne___project___language',
  ProjectAssigneProjectTools = 'project___assigne___project___tools',
  ProjectAssigneProjectSpaceId = 'project___assigne___project___spaceId',
  ProjectAssigneProjectContentfulId = 'project___assigne___project___contentful_id',
  ProjectAssigneProjectCreatedAt = 'project___assigne___project___createdAt',
  ProjectAssigneProjectUpdatedAt = 'project___assigne___project___updatedAt',
  ProjectAssigneProjectNodeLocale = 'project___assigne___project___node_locale',
  ProjectAssigneSpaceId = 'project___assigne___spaceId',
  ProjectAssigneContentfulId = 'project___assigne___contentful_id',
  ProjectAssigneCreatedAt = 'project___assigne___createdAt',
  ProjectAssigneUpdatedAt = 'project___assigne___updatedAt',
  ProjectAssigneSysRevision = 'project___assigne___sys___revision',
  ProjectAssigneNodeLocale = 'project___assigne___node_locale',
  ProjectSystem = 'project___system',
  ProjectSystemId = 'project___system___id',
  ProjectSystemParentId = 'project___system___parent___id',
  ProjectSystemParentChildren = 'project___system___parent___children',
  ProjectSystemChildren = 'project___system___children',
  ProjectSystemChildrenId = 'project___system___children___id',
  ProjectSystemChildrenChildren = 'project___system___children___children',
  ProjectSystemInternalContent = 'project___system___internal___content',
  ProjectSystemInternalContentDigest = 'project___system___internal___contentDigest',
  ProjectSystemInternalDescription = 'project___system___internal___description',
  ProjectSystemInternalFieldOwners = 'project___system___internal___fieldOwners',
  ProjectSystemInternalIgnoreType = 'project___system___internal___ignoreType',
  ProjectSystemInternalMediaType = 'project___system___internal___mediaType',
  ProjectSystemInternalOwner = 'project___system___internal___owner',
  ProjectSystemInternalType = 'project___system___internal___type',
  ProjectSystemName = 'project___system___name',
  ProjectSystemLevel = 'project___system___level',
  ProjectSystemProject = 'project___system___project',
  ProjectSystemProjectId = 'project___system___project___id',
  ProjectSystemProjectChildren = 'project___system___project___children',
  ProjectSystemProjectName = 'project___system___project___name',
  ProjectSystemProjectSlug = 'project___system___project___slug',
  ProjectSystemProjectStartDate = 'project___system___project___startDate',
  ProjectSystemProjectDuring = 'project___system___project___during',
  ProjectSystemProjectComment = 'project___system___project___comment',
  ProjectSystemProjectSiteUrl = 'project___system___project___siteUrl',
  ProjectSystemProjectSourceUrl = 'project___system___project___sourceUrl',
  ProjectSystemProjectRole = 'project___system___project___role',
  ProjectSystemProjectAssigne = 'project___system___project___assigne',
  ProjectSystemProjectSystem = 'project___system___project___system',
  ProjectSystemProjectLanguage = 'project___system___project___language',
  ProjectSystemProjectTools = 'project___system___project___tools',
  ProjectSystemProjectSpaceId = 'project___system___project___spaceId',
  ProjectSystemProjectContentfulId = 'project___system___project___contentful_id',
  ProjectSystemProjectCreatedAt = 'project___system___project___createdAt',
  ProjectSystemProjectUpdatedAt = 'project___system___project___updatedAt',
  ProjectSystemProjectNodeLocale = 'project___system___project___node_locale',
  ProjectSystemSpaceId = 'project___system___spaceId',
  ProjectSystemContentfulId = 'project___system___contentful_id',
  ProjectSystemCreatedAt = 'project___system___createdAt',
  ProjectSystemUpdatedAt = 'project___system___updatedAt',
  ProjectSystemSysRevision = 'project___system___sys___revision',
  ProjectSystemNodeLocale = 'project___system___node_locale',
  ProjectSystemSkillmap = 'project___system___skillmap',
  ProjectSystemSkillmapId = 'project___system___skillmap___id',
  ProjectSystemSkillmapChildren = 'project___system___skillmap___children',
  ProjectSystemSkillmapName = 'project___system___skillmap___name',
  ProjectSystemSkillmapSkills = 'project___system___skillmap___skills',
  ProjectSystemSkillmapSpaceId = 'project___system___skillmap___spaceId',
  ProjectSystemSkillmapContentfulId = 'project___system___skillmap___contentful_id',
  ProjectSystemSkillmapCreatedAt = 'project___system___skillmap___createdAt',
  ProjectSystemSkillmapUpdatedAt = 'project___system___skillmap___updatedAt',
  ProjectSystemSkillmapNodeLocale = 'project___system___skillmap___node_locale',
  ProjectLanguage = 'project___language',
  ProjectLanguageId = 'project___language___id',
  ProjectLanguageParentId = 'project___language___parent___id',
  ProjectLanguageParentChildren = 'project___language___parent___children',
  ProjectLanguageChildren = 'project___language___children',
  ProjectLanguageChildrenId = 'project___language___children___id',
  ProjectLanguageChildrenChildren = 'project___language___children___children',
  ProjectLanguageInternalContent = 'project___language___internal___content',
  ProjectLanguageInternalContentDigest = 'project___language___internal___contentDigest',
  ProjectLanguageInternalDescription = 'project___language___internal___description',
  ProjectLanguageInternalFieldOwners = 'project___language___internal___fieldOwners',
  ProjectLanguageInternalIgnoreType = 'project___language___internal___ignoreType',
  ProjectLanguageInternalMediaType = 'project___language___internal___mediaType',
  ProjectLanguageInternalOwner = 'project___language___internal___owner',
  ProjectLanguageInternalType = 'project___language___internal___type',
  ProjectLanguageName = 'project___language___name',
  ProjectLanguageLevel = 'project___language___level',
  ProjectLanguageProject = 'project___language___project',
  ProjectLanguageProjectId = 'project___language___project___id',
  ProjectLanguageProjectChildren = 'project___language___project___children',
  ProjectLanguageProjectName = 'project___language___project___name',
  ProjectLanguageProjectSlug = 'project___language___project___slug',
  ProjectLanguageProjectStartDate = 'project___language___project___startDate',
  ProjectLanguageProjectDuring = 'project___language___project___during',
  ProjectLanguageProjectComment = 'project___language___project___comment',
  ProjectLanguageProjectSiteUrl = 'project___language___project___siteUrl',
  ProjectLanguageProjectSourceUrl = 'project___language___project___sourceUrl',
  ProjectLanguageProjectRole = 'project___language___project___role',
  ProjectLanguageProjectAssigne = 'project___language___project___assigne',
  ProjectLanguageProjectSystem = 'project___language___project___system',
  ProjectLanguageProjectLanguage = 'project___language___project___language',
  ProjectLanguageProjectTools = 'project___language___project___tools',
  ProjectLanguageProjectSpaceId = 'project___language___project___spaceId',
  ProjectLanguageProjectContentfulId = 'project___language___project___contentful_id',
  ProjectLanguageProjectCreatedAt = 'project___language___project___createdAt',
  ProjectLanguageProjectUpdatedAt = 'project___language___project___updatedAt',
  ProjectLanguageProjectNodeLocale = 'project___language___project___node_locale',
  ProjectLanguageSpaceId = 'project___language___spaceId',
  ProjectLanguageContentfulId = 'project___language___contentful_id',
  ProjectLanguageCreatedAt = 'project___language___createdAt',
  ProjectLanguageUpdatedAt = 'project___language___updatedAt',
  ProjectLanguageSysRevision = 'project___language___sys___revision',
  ProjectLanguageNodeLocale = 'project___language___node_locale',
  ProjectLanguageSkillmap = 'project___language___skillmap',
  ProjectLanguageSkillmapId = 'project___language___skillmap___id',
  ProjectLanguageSkillmapChildren = 'project___language___skillmap___children',
  ProjectLanguageSkillmapName = 'project___language___skillmap___name',
  ProjectLanguageSkillmapSkills = 'project___language___skillmap___skills',
  ProjectLanguageSkillmapSpaceId = 'project___language___skillmap___spaceId',
  ProjectLanguageSkillmapContentfulId = 'project___language___skillmap___contentful_id',
  ProjectLanguageSkillmapCreatedAt = 'project___language___skillmap___createdAt',
  ProjectLanguageSkillmapUpdatedAt = 'project___language___skillmap___updatedAt',
  ProjectLanguageSkillmapNodeLocale = 'project___language___skillmap___node_locale',
  ProjectTools = 'project___tools',
  ProjectToolsId = 'project___tools___id',
  ProjectToolsParentId = 'project___tools___parent___id',
  ProjectToolsParentChildren = 'project___tools___parent___children',
  ProjectToolsChildren = 'project___tools___children',
  ProjectToolsChildrenId = 'project___tools___children___id',
  ProjectToolsChildrenChildren = 'project___tools___children___children',
  ProjectToolsInternalContent = 'project___tools___internal___content',
  ProjectToolsInternalContentDigest = 'project___tools___internal___contentDigest',
  ProjectToolsInternalDescription = 'project___tools___internal___description',
  ProjectToolsInternalFieldOwners = 'project___tools___internal___fieldOwners',
  ProjectToolsInternalIgnoreType = 'project___tools___internal___ignoreType',
  ProjectToolsInternalMediaType = 'project___tools___internal___mediaType',
  ProjectToolsInternalOwner = 'project___tools___internal___owner',
  ProjectToolsInternalType = 'project___tools___internal___type',
  ProjectToolsName = 'project___tools___name',
  ProjectToolsLevel = 'project___tools___level',
  ProjectToolsProject = 'project___tools___project',
  ProjectToolsProjectId = 'project___tools___project___id',
  ProjectToolsProjectChildren = 'project___tools___project___children',
  ProjectToolsProjectName = 'project___tools___project___name',
  ProjectToolsProjectSlug = 'project___tools___project___slug',
  ProjectToolsProjectStartDate = 'project___tools___project___startDate',
  ProjectToolsProjectDuring = 'project___tools___project___during',
  ProjectToolsProjectComment = 'project___tools___project___comment',
  ProjectToolsProjectSiteUrl = 'project___tools___project___siteUrl',
  ProjectToolsProjectSourceUrl = 'project___tools___project___sourceUrl',
  ProjectToolsProjectRole = 'project___tools___project___role',
  ProjectToolsProjectAssigne = 'project___tools___project___assigne',
  ProjectToolsProjectSystem = 'project___tools___project___system',
  ProjectToolsProjectLanguage = 'project___tools___project___language',
  ProjectToolsProjectTools = 'project___tools___project___tools',
  ProjectToolsProjectSpaceId = 'project___tools___project___spaceId',
  ProjectToolsProjectContentfulId = 'project___tools___project___contentful_id',
  ProjectToolsProjectCreatedAt = 'project___tools___project___createdAt',
  ProjectToolsProjectUpdatedAt = 'project___tools___project___updatedAt',
  ProjectToolsProjectNodeLocale = 'project___tools___project___node_locale',
  ProjectToolsSpaceId = 'project___tools___spaceId',
  ProjectToolsContentfulId = 'project___tools___contentful_id',
  ProjectToolsCreatedAt = 'project___tools___createdAt',
  ProjectToolsUpdatedAt = 'project___tools___updatedAt',
  ProjectToolsSysRevision = 'project___tools___sys___revision',
  ProjectToolsNodeLocale = 'project___tools___node_locale',
  ProjectToolsSkillmap = 'project___tools___skillmap',
  ProjectToolsSkillmapId = 'project___tools___skillmap___id',
  ProjectToolsSkillmapChildren = 'project___tools___skillmap___children',
  ProjectToolsSkillmapName = 'project___tools___skillmap___name',
  ProjectToolsSkillmapSkills = 'project___tools___skillmap___skills',
  ProjectToolsSkillmapSpaceId = 'project___tools___skillmap___spaceId',
  ProjectToolsSkillmapContentfulId = 'project___tools___skillmap___contentful_id',
  ProjectToolsSkillmapCreatedAt = 'project___tools___skillmap___createdAt',
  ProjectToolsSkillmapUpdatedAt = 'project___tools___skillmap___updatedAt',
  ProjectToolsSkillmapNodeLocale = 'project___tools___skillmap___node_locale',
  ProjectSpaceId = 'project___spaceId',
  ProjectContentfulId = 'project___contentful_id',
  ProjectCreatedAt = 'project___createdAt',
  ProjectUpdatedAt = 'project___updatedAt',
  ProjectSysRevision = 'project___sys___revision',
  ProjectNodeLocale = 'project___node_locale',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale',
  Skillmap = 'skillmap',
  SkillmapId = 'skillmap___id',
  SkillmapParentId = 'skillmap___parent___id',
  SkillmapParentParentId = 'skillmap___parent___parent___id',
  SkillmapParentParentChildren = 'skillmap___parent___parent___children',
  SkillmapParentChildren = 'skillmap___parent___children',
  SkillmapParentChildrenId = 'skillmap___parent___children___id',
  SkillmapParentChildrenChildren = 'skillmap___parent___children___children',
  SkillmapParentInternalContent = 'skillmap___parent___internal___content',
  SkillmapParentInternalContentDigest = 'skillmap___parent___internal___contentDigest',
  SkillmapParentInternalDescription = 'skillmap___parent___internal___description',
  SkillmapParentInternalFieldOwners = 'skillmap___parent___internal___fieldOwners',
  SkillmapParentInternalIgnoreType = 'skillmap___parent___internal___ignoreType',
  SkillmapParentInternalMediaType = 'skillmap___parent___internal___mediaType',
  SkillmapParentInternalOwner = 'skillmap___parent___internal___owner',
  SkillmapParentInternalType = 'skillmap___parent___internal___type',
  SkillmapChildren = 'skillmap___children',
  SkillmapChildrenId = 'skillmap___children___id',
  SkillmapChildrenParentId = 'skillmap___children___parent___id',
  SkillmapChildrenParentChildren = 'skillmap___children___parent___children',
  SkillmapChildrenChildren = 'skillmap___children___children',
  SkillmapChildrenChildrenId = 'skillmap___children___children___id',
  SkillmapChildrenChildrenChildren = 'skillmap___children___children___children',
  SkillmapChildrenInternalContent = 'skillmap___children___internal___content',
  SkillmapChildrenInternalContentDigest = 'skillmap___children___internal___contentDigest',
  SkillmapChildrenInternalDescription = 'skillmap___children___internal___description',
  SkillmapChildrenInternalFieldOwners = 'skillmap___children___internal___fieldOwners',
  SkillmapChildrenInternalIgnoreType = 'skillmap___children___internal___ignoreType',
  SkillmapChildrenInternalMediaType = 'skillmap___children___internal___mediaType',
  SkillmapChildrenInternalOwner = 'skillmap___children___internal___owner',
  SkillmapChildrenInternalType = 'skillmap___children___internal___type',
  SkillmapInternalContent = 'skillmap___internal___content',
  SkillmapInternalContentDigest = 'skillmap___internal___contentDigest',
  SkillmapInternalDescription = 'skillmap___internal___description',
  SkillmapInternalFieldOwners = 'skillmap___internal___fieldOwners',
  SkillmapInternalIgnoreType = 'skillmap___internal___ignoreType',
  SkillmapInternalMediaType = 'skillmap___internal___mediaType',
  SkillmapInternalOwner = 'skillmap___internal___owner',
  SkillmapInternalType = 'skillmap___internal___type',
  SkillmapName = 'skillmap___name',
  SkillmapSkills = 'skillmap___skills',
  SkillmapSkillsId = 'skillmap___skills___id',
  SkillmapSkillsParentId = 'skillmap___skills___parent___id',
  SkillmapSkillsParentChildren = 'skillmap___skills___parent___children',
  SkillmapSkillsChildren = 'skillmap___skills___children',
  SkillmapSkillsChildrenId = 'skillmap___skills___children___id',
  SkillmapSkillsChildrenChildren = 'skillmap___skills___children___children',
  SkillmapSkillsInternalContent = 'skillmap___skills___internal___content',
  SkillmapSkillsInternalContentDigest = 'skillmap___skills___internal___contentDigest',
  SkillmapSkillsInternalDescription = 'skillmap___skills___internal___description',
  SkillmapSkillsInternalFieldOwners = 'skillmap___skills___internal___fieldOwners',
  SkillmapSkillsInternalIgnoreType = 'skillmap___skills___internal___ignoreType',
  SkillmapSkillsInternalMediaType = 'skillmap___skills___internal___mediaType',
  SkillmapSkillsInternalOwner = 'skillmap___skills___internal___owner',
  SkillmapSkillsInternalType = 'skillmap___skills___internal___type',
  SkillmapSkillsName = 'skillmap___skills___name',
  SkillmapSkillsLevel = 'skillmap___skills___level',
  SkillmapSkillsProject = 'skillmap___skills___project',
  SkillmapSkillsProjectId = 'skillmap___skills___project___id',
  SkillmapSkillsProjectChildren = 'skillmap___skills___project___children',
  SkillmapSkillsProjectName = 'skillmap___skills___project___name',
  SkillmapSkillsProjectSlug = 'skillmap___skills___project___slug',
  SkillmapSkillsProjectStartDate = 'skillmap___skills___project___startDate',
  SkillmapSkillsProjectDuring = 'skillmap___skills___project___during',
  SkillmapSkillsProjectComment = 'skillmap___skills___project___comment',
  SkillmapSkillsProjectSiteUrl = 'skillmap___skills___project___siteUrl',
  SkillmapSkillsProjectSourceUrl = 'skillmap___skills___project___sourceUrl',
  SkillmapSkillsProjectRole = 'skillmap___skills___project___role',
  SkillmapSkillsProjectAssigne = 'skillmap___skills___project___assigne',
  SkillmapSkillsProjectSystem = 'skillmap___skills___project___system',
  SkillmapSkillsProjectLanguage = 'skillmap___skills___project___language',
  SkillmapSkillsProjectTools = 'skillmap___skills___project___tools',
  SkillmapSkillsProjectSpaceId = 'skillmap___skills___project___spaceId',
  SkillmapSkillsProjectContentfulId = 'skillmap___skills___project___contentful_id',
  SkillmapSkillsProjectCreatedAt = 'skillmap___skills___project___createdAt',
  SkillmapSkillsProjectUpdatedAt = 'skillmap___skills___project___updatedAt',
  SkillmapSkillsProjectNodeLocale = 'skillmap___skills___project___node_locale',
  SkillmapSkillsSpaceId = 'skillmap___skills___spaceId',
  SkillmapSkillsContentfulId = 'skillmap___skills___contentful_id',
  SkillmapSkillsCreatedAt = 'skillmap___skills___createdAt',
  SkillmapSkillsUpdatedAt = 'skillmap___skills___updatedAt',
  SkillmapSkillsSysRevision = 'skillmap___skills___sys___revision',
  SkillmapSkillsNodeLocale = 'skillmap___skills___node_locale',
  SkillmapSkillsSkillmap = 'skillmap___skills___skillmap',
  SkillmapSkillsSkillmapId = 'skillmap___skills___skillmap___id',
  SkillmapSkillsSkillmapChildren = 'skillmap___skills___skillmap___children',
  SkillmapSkillsSkillmapName = 'skillmap___skills___skillmap___name',
  SkillmapSkillsSkillmapSkills = 'skillmap___skills___skillmap___skills',
  SkillmapSkillsSkillmapSpaceId = 'skillmap___skills___skillmap___spaceId',
  SkillmapSkillsSkillmapContentfulId = 'skillmap___skills___skillmap___contentful_id',
  SkillmapSkillsSkillmapCreatedAt = 'skillmap___skills___skillmap___createdAt',
  SkillmapSkillsSkillmapUpdatedAt = 'skillmap___skills___skillmap___updatedAt',
  SkillmapSkillsSkillmapNodeLocale = 'skillmap___skills___skillmap___node_locale',
  SkillmapSpaceId = 'skillmap___spaceId',
  SkillmapContentfulId = 'skillmap___contentful_id',
  SkillmapCreatedAt = 'skillmap___createdAt',
  SkillmapUpdatedAt = 'skillmap___updatedAt',
  SkillmapSysRevision = 'skillmap___sys___revision',
  SkillmapNodeLocale = 'skillmap___node_locale'
}

export type ContentfulSkillFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  level?: Maybe<IntQueryOperatorInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  skillmap?: Maybe<ContentfulSkillMapFilterListInput>;
};

export type ContentfulSkillFilterListInput = {
  elemMatch?: Maybe<ContentfulSkillFilterInput>;
};

export type ContentfulSkillGroupConnection = {
  __typename?: 'ContentfulSkillGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillEdge>;
  nodes: Array<ContentfulSkill>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMap = Node & {
  __typename?: 'ContentfulSkillMap';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<ContentfulSkill>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSkillMapSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulSkillMapCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSkillMapUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapConnection = {
  __typename?: 'ContentfulSkillMapConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillMapEdge>;
  nodes: Array<ContentfulSkillMap>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSkillMapGroupConnection>;
};


export type ContentfulSkillMapConnectionDistinctArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSkillMapFieldsEnum;
};

export type ContentfulSkillMapEdge = {
  __typename?: 'ContentfulSkillMapEdge';
  next?: Maybe<ContentfulSkillMap>;
  node: ContentfulSkillMap;
  previous?: Maybe<ContentfulSkillMap>;
};

export enum ContentfulSkillMapFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Skills = 'skills',
  SkillsId = 'skills___id',
  SkillsParentId = 'skills___parent___id',
  SkillsParentParentId = 'skills___parent___parent___id',
  SkillsParentParentChildren = 'skills___parent___parent___children',
  SkillsParentChildren = 'skills___parent___children',
  SkillsParentChildrenId = 'skills___parent___children___id',
  SkillsParentChildrenChildren = 'skills___parent___children___children',
  SkillsParentInternalContent = 'skills___parent___internal___content',
  SkillsParentInternalContentDigest = 'skills___parent___internal___contentDigest',
  SkillsParentInternalDescription = 'skills___parent___internal___description',
  SkillsParentInternalFieldOwners = 'skills___parent___internal___fieldOwners',
  SkillsParentInternalIgnoreType = 'skills___parent___internal___ignoreType',
  SkillsParentInternalMediaType = 'skills___parent___internal___mediaType',
  SkillsParentInternalOwner = 'skills___parent___internal___owner',
  SkillsParentInternalType = 'skills___parent___internal___type',
  SkillsChildren = 'skills___children',
  SkillsChildrenId = 'skills___children___id',
  SkillsChildrenParentId = 'skills___children___parent___id',
  SkillsChildrenParentChildren = 'skills___children___parent___children',
  SkillsChildrenChildren = 'skills___children___children',
  SkillsChildrenChildrenId = 'skills___children___children___id',
  SkillsChildrenChildrenChildren = 'skills___children___children___children',
  SkillsChildrenInternalContent = 'skills___children___internal___content',
  SkillsChildrenInternalContentDigest = 'skills___children___internal___contentDigest',
  SkillsChildrenInternalDescription = 'skills___children___internal___description',
  SkillsChildrenInternalFieldOwners = 'skills___children___internal___fieldOwners',
  SkillsChildrenInternalIgnoreType = 'skills___children___internal___ignoreType',
  SkillsChildrenInternalMediaType = 'skills___children___internal___mediaType',
  SkillsChildrenInternalOwner = 'skills___children___internal___owner',
  SkillsChildrenInternalType = 'skills___children___internal___type',
  SkillsInternalContent = 'skills___internal___content',
  SkillsInternalContentDigest = 'skills___internal___contentDigest',
  SkillsInternalDescription = 'skills___internal___description',
  SkillsInternalFieldOwners = 'skills___internal___fieldOwners',
  SkillsInternalIgnoreType = 'skills___internal___ignoreType',
  SkillsInternalMediaType = 'skills___internal___mediaType',
  SkillsInternalOwner = 'skills___internal___owner',
  SkillsInternalType = 'skills___internal___type',
  SkillsName = 'skills___name',
  SkillsLevel = 'skills___level',
  SkillsProject = 'skills___project',
  SkillsProjectId = 'skills___project___id',
  SkillsProjectParentId = 'skills___project___parent___id',
  SkillsProjectParentChildren = 'skills___project___parent___children',
  SkillsProjectChildren = 'skills___project___children',
  SkillsProjectChildrenId = 'skills___project___children___id',
  SkillsProjectChildrenChildren = 'skills___project___children___children',
  SkillsProjectInternalContent = 'skills___project___internal___content',
  SkillsProjectInternalContentDigest = 'skills___project___internal___contentDigest',
  SkillsProjectInternalDescription = 'skills___project___internal___description',
  SkillsProjectInternalFieldOwners = 'skills___project___internal___fieldOwners',
  SkillsProjectInternalIgnoreType = 'skills___project___internal___ignoreType',
  SkillsProjectInternalMediaType = 'skills___project___internal___mediaType',
  SkillsProjectInternalOwner = 'skills___project___internal___owner',
  SkillsProjectInternalType = 'skills___project___internal___type',
  SkillsProjectName = 'skills___project___name',
  SkillsProjectSlug = 'skills___project___slug',
  SkillsProjectStartDate = 'skills___project___startDate',
  SkillsProjectDuring = 'skills___project___during',
  SkillsProjectComment = 'skills___project___comment',
  SkillsProjectSiteUrl = 'skills___project___siteUrl',
  SkillsProjectSourceUrl = 'skills___project___sourceUrl',
  SkillsProjectMainImageId = 'skills___project___mainImage___id',
  SkillsProjectMainImageChildren = 'skills___project___mainImage___children',
  SkillsProjectMainImageContentfulId = 'skills___project___mainImage___contentful_id',
  SkillsProjectMainImageSpaceId = 'skills___project___mainImage___spaceId',
  SkillsProjectMainImageCreatedAt = 'skills___project___mainImage___createdAt',
  SkillsProjectMainImageUpdatedAt = 'skills___project___mainImage___updatedAt',
  SkillsProjectMainImageTitle = 'skills___project___mainImage___title',
  SkillsProjectMainImageDescription = 'skills___project___mainImage___description',
  SkillsProjectMainImageNodeLocale = 'skills___project___mainImage___node_locale',
  SkillsProjectRole = 'skills___project___role',
  SkillsProjectRoleId = 'skills___project___role___id',
  SkillsProjectRoleChildren = 'skills___project___role___children',
  SkillsProjectRoleName = 'skills___project___role___name',
  SkillsProjectRoleProject = 'skills___project___role___project',
  SkillsProjectRoleSpaceId = 'skills___project___role___spaceId',
  SkillsProjectRoleContentfulId = 'skills___project___role___contentful_id',
  SkillsProjectRoleCreatedAt = 'skills___project___role___createdAt',
  SkillsProjectRoleUpdatedAt = 'skills___project___role___updatedAt',
  SkillsProjectRoleNodeLocale = 'skills___project___role___node_locale',
  SkillsProjectAssigne = 'skills___project___assigne',
  SkillsProjectAssigneId = 'skills___project___assigne___id',
  SkillsProjectAssigneChildren = 'skills___project___assigne___children',
  SkillsProjectAssigneName = 'skills___project___assigne___name',
  SkillsProjectAssigneProject = 'skills___project___assigne___project',
  SkillsProjectAssigneSpaceId = 'skills___project___assigne___spaceId',
  SkillsProjectAssigneContentfulId = 'skills___project___assigne___contentful_id',
  SkillsProjectAssigneCreatedAt = 'skills___project___assigne___createdAt',
  SkillsProjectAssigneUpdatedAt = 'skills___project___assigne___updatedAt',
  SkillsProjectAssigneNodeLocale = 'skills___project___assigne___node_locale',
  SkillsProjectSystem = 'skills___project___system',
  SkillsProjectSystemId = 'skills___project___system___id',
  SkillsProjectSystemChildren = 'skills___project___system___children',
  SkillsProjectSystemName = 'skills___project___system___name',
  SkillsProjectSystemLevel = 'skills___project___system___level',
  SkillsProjectSystemProject = 'skills___project___system___project',
  SkillsProjectSystemSpaceId = 'skills___project___system___spaceId',
  SkillsProjectSystemContentfulId = 'skills___project___system___contentful_id',
  SkillsProjectSystemCreatedAt = 'skills___project___system___createdAt',
  SkillsProjectSystemUpdatedAt = 'skills___project___system___updatedAt',
  SkillsProjectSystemNodeLocale = 'skills___project___system___node_locale',
  SkillsProjectSystemSkillmap = 'skills___project___system___skillmap',
  SkillsProjectLanguage = 'skills___project___language',
  SkillsProjectLanguageId = 'skills___project___language___id',
  SkillsProjectLanguageChildren = 'skills___project___language___children',
  SkillsProjectLanguageName = 'skills___project___language___name',
  SkillsProjectLanguageLevel = 'skills___project___language___level',
  SkillsProjectLanguageProject = 'skills___project___language___project',
  SkillsProjectLanguageSpaceId = 'skills___project___language___spaceId',
  SkillsProjectLanguageContentfulId = 'skills___project___language___contentful_id',
  SkillsProjectLanguageCreatedAt = 'skills___project___language___createdAt',
  SkillsProjectLanguageUpdatedAt = 'skills___project___language___updatedAt',
  SkillsProjectLanguageNodeLocale = 'skills___project___language___node_locale',
  SkillsProjectLanguageSkillmap = 'skills___project___language___skillmap',
  SkillsProjectTools = 'skills___project___tools',
  SkillsProjectToolsId = 'skills___project___tools___id',
  SkillsProjectToolsChildren = 'skills___project___tools___children',
  SkillsProjectToolsName = 'skills___project___tools___name',
  SkillsProjectToolsLevel = 'skills___project___tools___level',
  SkillsProjectToolsProject = 'skills___project___tools___project',
  SkillsProjectToolsSpaceId = 'skills___project___tools___spaceId',
  SkillsProjectToolsContentfulId = 'skills___project___tools___contentful_id',
  SkillsProjectToolsCreatedAt = 'skills___project___tools___createdAt',
  SkillsProjectToolsUpdatedAt = 'skills___project___tools___updatedAt',
  SkillsProjectToolsNodeLocale = 'skills___project___tools___node_locale',
  SkillsProjectToolsSkillmap = 'skills___project___tools___skillmap',
  SkillsProjectSpaceId = 'skills___project___spaceId',
  SkillsProjectContentfulId = 'skills___project___contentful_id',
  SkillsProjectCreatedAt = 'skills___project___createdAt',
  SkillsProjectUpdatedAt = 'skills___project___updatedAt',
  SkillsProjectSysRevision = 'skills___project___sys___revision',
  SkillsProjectNodeLocale = 'skills___project___node_locale',
  SkillsSpaceId = 'skills___spaceId',
  SkillsContentfulId = 'skills___contentful_id',
  SkillsCreatedAt = 'skills___createdAt',
  SkillsUpdatedAt = 'skills___updatedAt',
  SkillsSysRevision = 'skills___sys___revision',
  SkillsNodeLocale = 'skills___node_locale',
  SkillsSkillmap = 'skills___skillmap',
  SkillsSkillmapId = 'skills___skillmap___id',
  SkillsSkillmapParentId = 'skills___skillmap___parent___id',
  SkillsSkillmapParentChildren = 'skills___skillmap___parent___children',
  SkillsSkillmapChildren = 'skills___skillmap___children',
  SkillsSkillmapChildrenId = 'skills___skillmap___children___id',
  SkillsSkillmapChildrenChildren = 'skills___skillmap___children___children',
  SkillsSkillmapInternalContent = 'skills___skillmap___internal___content',
  SkillsSkillmapInternalContentDigest = 'skills___skillmap___internal___contentDigest',
  SkillsSkillmapInternalDescription = 'skills___skillmap___internal___description',
  SkillsSkillmapInternalFieldOwners = 'skills___skillmap___internal___fieldOwners',
  SkillsSkillmapInternalIgnoreType = 'skills___skillmap___internal___ignoreType',
  SkillsSkillmapInternalMediaType = 'skills___skillmap___internal___mediaType',
  SkillsSkillmapInternalOwner = 'skills___skillmap___internal___owner',
  SkillsSkillmapInternalType = 'skills___skillmap___internal___type',
  SkillsSkillmapName = 'skills___skillmap___name',
  SkillsSkillmapSkills = 'skills___skillmap___skills',
  SkillsSkillmapSkillsId = 'skills___skillmap___skills___id',
  SkillsSkillmapSkillsChildren = 'skills___skillmap___skills___children',
  SkillsSkillmapSkillsName = 'skills___skillmap___skills___name',
  SkillsSkillmapSkillsLevel = 'skills___skillmap___skills___level',
  SkillsSkillmapSkillsProject = 'skills___skillmap___skills___project',
  SkillsSkillmapSkillsSpaceId = 'skills___skillmap___skills___spaceId',
  SkillsSkillmapSkillsContentfulId = 'skills___skillmap___skills___contentful_id',
  SkillsSkillmapSkillsCreatedAt = 'skills___skillmap___skills___createdAt',
  SkillsSkillmapSkillsUpdatedAt = 'skills___skillmap___skills___updatedAt',
  SkillsSkillmapSkillsNodeLocale = 'skills___skillmap___skills___node_locale',
  SkillsSkillmapSkillsSkillmap = 'skills___skillmap___skills___skillmap',
  SkillsSkillmapSpaceId = 'skills___skillmap___spaceId',
  SkillsSkillmapContentfulId = 'skills___skillmap___contentful_id',
  SkillsSkillmapCreatedAt = 'skills___skillmap___createdAt',
  SkillsSkillmapUpdatedAt = 'skills___skillmap___updatedAt',
  SkillsSkillmapSysRevision = 'skills___skillmap___sys___revision',
  SkillsSkillmapNodeLocale = 'skills___skillmap___node_locale',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale'
}

export type ContentfulSkillMapFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  skills?: Maybe<ContentfulSkillFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillMapSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSkillMapFilterListInput = {
  elemMatch?: Maybe<ContentfulSkillMapFilterInput>;
};

export type ContentfulSkillMapGroupConnection = {
  __typename?: 'ContentfulSkillMapGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillMapEdge>;
  nodes: Array<ContentfulSkillMap>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSkillMapFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSkillMapSys = {
  __typename?: 'ContentfulSkillMapSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSkillMapSysContentType>;
};

export type ContentfulSkillMapSysContentType = {
  __typename?: 'ContentfulSkillMapSysContentType';
  sys?: Maybe<ContentfulSkillMapSysContentTypeSys>;
};

export type ContentfulSkillMapSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSkillMapSysContentTypeSysFilterInput>;
};

export type ContentfulSkillMapSysContentTypeSys = {
  __typename?: 'ContentfulSkillMapSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSkillMapSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSkillMapSysContentTypeFilterInput>;
};

export type ContentfulSkillSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSkillFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSkillSys = {
  __typename?: 'ContentfulSkillSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSkillSysContentType>;
};

export type ContentfulSkillSysContentType = {
  __typename?: 'ContentfulSkillSysContentType';
  sys?: Maybe<ContentfulSkillSysContentTypeSys>;
};

export type ContentfulSkillSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSkillSysContentTypeSysFilterInput>;
};

export type ContentfulSkillSysContentTypeSys = {
  __typename?: 'ContentfulSkillSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSkillSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSkillSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSkillSysContentTypeFilterInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Url = 'url',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageResizingBehavior {
  NoChange = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = 'PAD',
  /** Crop a part of the original image to match the specified size. */
  Crop = 'CROP',
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  Fill = 'FILL',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = 'THUMB',
  /** Scale the image regardless of the original aspect ratio. */
  Scale = 'SCALE'
}

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  contentfulQualifications?: Maybe<ContentfulQualifications>;
  allContentfulQualifications: ContentfulQualificationsConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulAssigne?: Maybe<ContentfulAssigne>;
  allContentfulAssigne: ContentfulAssigneConnection;
  contentfulRole?: Maybe<ContentfulRole>;
  allContentfulRole: ContentfulRoleConnection;
  contentfulProject?: Maybe<ContentfulProject>;
  allContentfulProject: ContentfulProjectConnection;
  contentfulSkillMap?: Maybe<ContentfulSkillMap>;
  allContentfulSkillMap: ContentfulSkillMapConnection;
  contentfulSkill?: Maybe<ContentfulSkill>;
  allContentfulSkill: ContentfulSkillConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQualificationsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQualificationsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulQualificationsArgs = {
  filter?: Maybe<ContentfulQualificationsFilterInput>;
  sort?: Maybe<ContentfulQualificationsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssigneArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAssigneSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulAssigneArgs = {
  filter?: Maybe<ContentfulAssigneFilterInput>;
  sort?: Maybe<ContentfulAssigneSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulRoleArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulRoleSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulRoleArgs = {
  filter?: Maybe<ContentfulRoleFilterInput>;
  sort?: Maybe<ContentfulRoleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProjectArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  during?: Maybe<IntQueryOperatorInput>;
  comment?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  mainImage?: Maybe<ContentfulAssetFilterInput>;
  role?: Maybe<ContentfulRoleFilterListInput>;
  assigne?: Maybe<ContentfulAssigneFilterListInput>;
  system?: Maybe<ContentfulSkillFilterListInput>;
  language?: Maybe<ContentfulSkillFilterListInput>;
  tools?: Maybe<ContentfulSkillFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulProjectArgs = {
  filter?: Maybe<ContentfulProjectFilterInput>;
  sort?: Maybe<ContentfulProjectSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSkillMapArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  skills?: Maybe<ContentfulSkillFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillMapSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulSkillMapArgs = {
  filter?: Maybe<ContentfulSkillMapFilterInput>;
  sort?: Maybe<ContentfulSkillMapSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSkillArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  level?: Maybe<IntQueryOperatorInput>;
  project?: Maybe<ContentfulProjectFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  skillmap?: Maybe<ContentfulSkillMapFilterListInput>;
};


export type QueryAllContentfulSkillArgs = {
  filter?: Maybe<ContentfulSkillFilterInput>;
  sort?: Maybe<ContentfulSkillSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTitleJa = 'siteMetadata___title___ja',
  SiteMetadataTitleEn = 'siteMetadata___title___en',
  SiteMetadataShortTitleJa = 'siteMetadata___shortTitle___ja',
  SiteMetadataShortTitleEn = 'siteMetadata___shortTitle___en',
  SiteMetadataUrlJa = 'siteMetadata___url___ja',
  SiteMetadataUrlEn = 'siteMetadata___url___en',
  SiteMetadataDescriptionJa = 'siteMetadata___description___ja',
  SiteMetadataDescriptionEn = 'siteMetadata___description___en',
  SiteMetadataAuthorJa = 'siteMetadata___author___ja',
  SiteMetadataAuthorEn = 'siteMetadata___author___en',
  SiteMetadataIconSrc = 'siteMetadata___icon___src',
  SiteMetadataIconSizes = 'siteMetadata___icon___sizes',
  SiteMetadataIconType = 'siteMetadata___icon___type',
  SiteMetadataBackgroundColor = 'siteMetadata___backgroundColor',
  SiteMetadataThemeColor = 'siteMetadata___themeColor',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  language?: Maybe<Scalars['String']>;
  i18n?: Maybe<SitePageContextI18n>;
};

export type SitePageContextFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  i18n?: Maybe<SitePageContextI18nFilterInput>;
};

export type SitePageContextI18n = {
  __typename?: 'SitePageContextI18n';
  language?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  routed?: Maybe<Scalars['Boolean']>;
  resources?: Maybe<SitePageContextI18nResources>;
  originalPath?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  routed?: Maybe<BooleanQueryOperatorInput>;
  resources?: Maybe<SitePageContextI18nResourcesFilterInput>;
  originalPath?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResources = {
  __typename?: 'SitePageContextI18nResources';
  ja?: Maybe<SitePageContextI18nResourcesJa>;
  en?: Maybe<SitePageContextI18nResourcesEn>;
};

export type SitePageContextI18nResourcesEn = {
  __typename?: 'SitePageContextI18nResourcesEn';
  translation?: Maybe<SitePageContextI18nResourcesEnTranslation>;
};

export type SitePageContextI18nResourcesEnFilterInput = {
  translation?: Maybe<SitePageContextI18nResourcesEnTranslationFilterInput>;
};

export type SitePageContextI18nResourcesEnTranslation = {
  __typename?: 'SitePageContextI18nResourcesEnTranslation';
  Hello_world_?: Maybe<Scalars['String']>;
  contact?: Maybe<SitePageContextI18nResourcesEnTranslationContact>;
  cookie_alert?: Maybe<SitePageContextI18nResourcesEnTranslationCookie_Alert>;
  header?: Maybe<SitePageContextI18nResourcesEnTranslationHeader>;
  hello?: Maybe<SitePageContextI18nResourcesEnTranslationHello>;
  hello_message?: Maybe<Scalars['String']>;
  project?: Maybe<SitePageContextI18nResourcesEnTranslationProject>;
  skill_map?: Maybe<SitePageContextI18nResourcesEnTranslationSkill_Map>;
  what_i_do?: Maybe<SitePageContextI18nResourcesEnTranslationWhat_I_Do>;
};

export type SitePageContextI18nResourcesEnTranslationContact = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationContact';
  email?: Maybe<SitePageContextI18nResourcesEnTranslationContactEmail>;
  key?: Maybe<SitePageContextI18nResourcesEnTranslationContactKey>;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<SitePageContextI18nResourcesEnTranslationContactTwitter>;
};

export type SitePageContextI18nResourcesEnTranslationContactEmail = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationContactEmail';
  href?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationContactEmailFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationContactFilterInput = {
  email?: Maybe<SitePageContextI18nResourcesEnTranslationContactEmailFilterInput>;
  key?: Maybe<SitePageContextI18nResourcesEnTranslationContactKeyFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<SitePageContextI18nResourcesEnTranslationContactTwitterFilterInput>;
};

export type SitePageContextI18nResourcesEnTranslationContactKey = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationContactKey';
  href?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationContactKeyFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationContactTwitter = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationContactTwitter';
  href?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationContactTwitterFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationCookie_Alert = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationCookie_alert';
  accept?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dicline?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationCookie_AlertFilterInput = {
  accept?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  dicline?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationFilterInput = {
  Hello_world_?: Maybe<StringQueryOperatorInput>;
  contact?: Maybe<SitePageContextI18nResourcesEnTranslationContactFilterInput>;
  cookie_alert?: Maybe<SitePageContextI18nResourcesEnTranslationCookie_AlertFilterInput>;
  header?: Maybe<SitePageContextI18nResourcesEnTranslationHeaderFilterInput>;
  hello?: Maybe<SitePageContextI18nResourcesEnTranslationHelloFilterInput>;
  hello_message?: Maybe<StringQueryOperatorInput>;
  project?: Maybe<SitePageContextI18nResourcesEnTranslationProjectFilterInput>;
  skill_map?: Maybe<SitePageContextI18nResourcesEnTranslationSkill_MapFilterInput>;
  what_i_do?: Maybe<SitePageContextI18nResourcesEnTranslationWhat_I_DoFilterInput>;
};

export type SitePageContextI18nResourcesEnTranslationHeader = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationHeader';
  blog_title?: Maybe<Scalars['String']>;
  blog_url?: Maybe<Scalars['String']>;
  changeLanguage_title?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  github_title?: Maybe<Scalars['String']>;
  github_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_home?: Maybe<Scalars['String']>;
  toggleDarkTheme_title?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_url?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationHeaderFilterInput = {
  blog_title?: Maybe<StringQueryOperatorInput>;
  blog_url?: Maybe<StringQueryOperatorInput>;
  changeLanguage_title?: Maybe<StringQueryOperatorInput>;
  contact_title?: Maybe<StringQueryOperatorInput>;
  github_title?: Maybe<StringQueryOperatorInput>;
  github_url?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  title_home?: Maybe<StringQueryOperatorInput>;
  toggleDarkTheme_title?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_url?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationHello = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationHello';
  title?: Maybe<SitePageContextI18nResourcesEnTranslationHelloTitle>;
};

export type SitePageContextI18nResourcesEnTranslationHelloFilterInput = {
  title?: Maybe<SitePageContextI18nResourcesEnTranslationHelloTitleFilterInput>;
};

export type SitePageContextI18nResourcesEnTranslationHelloTitle = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationHelloTitle';
  _1?: Maybe<Scalars['String']>;
  _2?: Maybe<Scalars['String']>;
  _3?: Maybe<Scalars['String']>;
  _4?: Maybe<Scalars['String']>;
  _5?: Maybe<Scalars['String']>;
  _6?: Maybe<Scalars['String']>;
  pref?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationHelloTitleFilterInput = {
  _1?: Maybe<StringQueryOperatorInput>;
  _2?: Maybe<StringQueryOperatorInput>;
  _3?: Maybe<StringQueryOperatorInput>;
  _4?: Maybe<StringQueryOperatorInput>;
  _5?: Maybe<StringQueryOperatorInput>;
  _6?: Maybe<StringQueryOperatorInput>;
  pref?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationProject = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationProject';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationProjectFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationSkill_Map = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationSkill_map';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationSkill_MapFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesEnTranslationWhat_I_Do = {
  __typename?: 'SitePageContextI18nResourcesEnTranslationWhat_i_do';
  backend_message?: Maybe<Scalars['String']>;
  backend_tags?: Maybe<Scalars['String']>;
  backend_title?: Maybe<Scalars['String']>;
  devops_message?: Maybe<Scalars['String']>;
  devops_tags?: Maybe<Scalars['String']>;
  devops_title?: Maybe<Scalars['String']>;
  frontend_message?: Maybe<Scalars['String']>;
  frontend_tags?: Maybe<Scalars['String']>;
  frontend_title?: Maybe<Scalars['String']>;
  iot_message?: Maybe<Scalars['String']>;
  iot_tags?: Maybe<Scalars['String']>;
  iot_title?: Maybe<Scalars['String']>;
  mechanical_message?: Maybe<Scalars['String']>;
  mechanical_tags?: Maybe<Scalars['String']>;
  mechanical_title?: Maybe<Scalars['String']>;
  security_message?: Maybe<Scalars['String']>;
  security_tags?: Maybe<Scalars['String']>;
  security_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesEnTranslationWhat_I_DoFilterInput = {
  backend_message?: Maybe<StringQueryOperatorInput>;
  backend_tags?: Maybe<StringQueryOperatorInput>;
  backend_title?: Maybe<StringQueryOperatorInput>;
  devops_message?: Maybe<StringQueryOperatorInput>;
  devops_tags?: Maybe<StringQueryOperatorInput>;
  devops_title?: Maybe<StringQueryOperatorInput>;
  frontend_message?: Maybe<StringQueryOperatorInput>;
  frontend_tags?: Maybe<StringQueryOperatorInput>;
  frontend_title?: Maybe<StringQueryOperatorInput>;
  iot_message?: Maybe<StringQueryOperatorInput>;
  iot_tags?: Maybe<StringQueryOperatorInput>;
  iot_title?: Maybe<StringQueryOperatorInput>;
  mechanical_message?: Maybe<StringQueryOperatorInput>;
  mechanical_tags?: Maybe<StringQueryOperatorInput>;
  mechanical_title?: Maybe<StringQueryOperatorInput>;
  security_message?: Maybe<StringQueryOperatorInput>;
  security_tags?: Maybe<StringQueryOperatorInput>;
  security_title?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesFilterInput = {
  ja?: Maybe<SitePageContextI18nResourcesJaFilterInput>;
  en?: Maybe<SitePageContextI18nResourcesEnFilterInput>;
};

export type SitePageContextI18nResourcesJa = {
  __typename?: 'SitePageContextI18nResourcesJa';
  translation?: Maybe<SitePageContextI18nResourcesJaTranslation>;
};

export type SitePageContextI18nResourcesJaFilterInput = {
  translation?: Maybe<SitePageContextI18nResourcesJaTranslationFilterInput>;
};

export type SitePageContextI18nResourcesJaTranslation = {
  __typename?: 'SitePageContextI18nResourcesJaTranslation';
  Hello_world_?: Maybe<Scalars['String']>;
  contact?: Maybe<SitePageContextI18nResourcesJaTranslationContact>;
  cookie_alert?: Maybe<SitePageContextI18nResourcesJaTranslationCookie_Alert>;
  header?: Maybe<SitePageContextI18nResourcesJaTranslationHeader>;
  hello?: Maybe<SitePageContextI18nResourcesJaTranslationHello>;
  hello_message?: Maybe<Scalars['String']>;
  project?: Maybe<SitePageContextI18nResourcesJaTranslationProject>;
  skill_map?: Maybe<SitePageContextI18nResourcesJaTranslationSkill_Map>;
  what_i_do?: Maybe<SitePageContextI18nResourcesJaTranslationWhat_I_Do>;
};

export type SitePageContextI18nResourcesJaTranslationContact = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationContact';
  email?: Maybe<SitePageContextI18nResourcesJaTranslationContactEmail>;
  key?: Maybe<SitePageContextI18nResourcesJaTranslationContactKey>;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<SitePageContextI18nResourcesJaTranslationContactTwitter>;
};

export type SitePageContextI18nResourcesJaTranslationContactEmail = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationContactEmail';
  href?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationContactEmailFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationContactFilterInput = {
  email?: Maybe<SitePageContextI18nResourcesJaTranslationContactEmailFilterInput>;
  key?: Maybe<SitePageContextI18nResourcesJaTranslationContactKeyFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<SitePageContextI18nResourcesJaTranslationContactTwitterFilterInput>;
};

export type SitePageContextI18nResourcesJaTranslationContactKey = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationContactKey';
  href?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationContactKeyFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationContactTwitter = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationContactTwitter';
  href?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationContactTwitterFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationCookie_Alert = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationCookie_alert';
  accept?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dicline?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationCookie_AlertFilterInput = {
  accept?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  dicline?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationFilterInput = {
  Hello_world_?: Maybe<StringQueryOperatorInput>;
  contact?: Maybe<SitePageContextI18nResourcesJaTranslationContactFilterInput>;
  cookie_alert?: Maybe<SitePageContextI18nResourcesJaTranslationCookie_AlertFilterInput>;
  header?: Maybe<SitePageContextI18nResourcesJaTranslationHeaderFilterInput>;
  hello?: Maybe<SitePageContextI18nResourcesJaTranslationHelloFilterInput>;
  hello_message?: Maybe<StringQueryOperatorInput>;
  project?: Maybe<SitePageContextI18nResourcesJaTranslationProjectFilterInput>;
  skill_map?: Maybe<SitePageContextI18nResourcesJaTranslationSkill_MapFilterInput>;
  what_i_do?: Maybe<SitePageContextI18nResourcesJaTranslationWhat_I_DoFilterInput>;
};

export type SitePageContextI18nResourcesJaTranslationHeader = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationHeader';
  blog_title?: Maybe<Scalars['String']>;
  blog_url?: Maybe<Scalars['String']>;
  changeLanguage_title?: Maybe<Scalars['String']>;
  contact_title?: Maybe<Scalars['String']>;
  github_title?: Maybe<Scalars['String']>;
  github_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_home?: Maybe<Scalars['String']>;
  toggleDarkTheme_title?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_url?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationHeaderFilterInput = {
  blog_title?: Maybe<StringQueryOperatorInput>;
  blog_url?: Maybe<StringQueryOperatorInput>;
  changeLanguage_title?: Maybe<StringQueryOperatorInput>;
  contact_title?: Maybe<StringQueryOperatorInput>;
  github_title?: Maybe<StringQueryOperatorInput>;
  github_url?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  title_home?: Maybe<StringQueryOperatorInput>;
  toggleDarkTheme_title?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_url?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationHello = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationHello';
  title?: Maybe<SitePageContextI18nResourcesJaTranslationHelloTitle>;
};

export type SitePageContextI18nResourcesJaTranslationHelloFilterInput = {
  title?: Maybe<SitePageContextI18nResourcesJaTranslationHelloTitleFilterInput>;
};

export type SitePageContextI18nResourcesJaTranslationHelloTitle = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationHelloTitle';
  _1?: Maybe<Scalars['String']>;
  _2?: Maybe<Scalars['String']>;
  _3?: Maybe<Scalars['String']>;
  _4?: Maybe<Scalars['String']>;
  _5?: Maybe<Scalars['String']>;
  _6?: Maybe<Scalars['String']>;
  pref?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationHelloTitleFilterInput = {
  _1?: Maybe<StringQueryOperatorInput>;
  _2?: Maybe<StringQueryOperatorInput>;
  _3?: Maybe<StringQueryOperatorInput>;
  _4?: Maybe<StringQueryOperatorInput>;
  _5?: Maybe<StringQueryOperatorInput>;
  _6?: Maybe<StringQueryOperatorInput>;
  pref?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationProject = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationProject';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationProjectFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationSkill_Map = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationSkill_map';
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationSkill_MapFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18nResourcesJaTranslationWhat_I_Do = {
  __typename?: 'SitePageContextI18nResourcesJaTranslationWhat_i_do';
  backend_message?: Maybe<Scalars['String']>;
  backend_tags?: Maybe<Scalars['String']>;
  backend_title?: Maybe<Scalars['String']>;
  devops_message?: Maybe<Scalars['String']>;
  devops_tags?: Maybe<Scalars['String']>;
  devops_title?: Maybe<Scalars['String']>;
  frontend_message?: Maybe<Scalars['String']>;
  frontend_tags?: Maybe<Scalars['String']>;
  frontend_title?: Maybe<Scalars['String']>;
  iot_message?: Maybe<Scalars['String']>;
  iot_tags?: Maybe<Scalars['String']>;
  iot_title?: Maybe<Scalars['String']>;
  mechanical_message?: Maybe<Scalars['String']>;
  mechanical_tags?: Maybe<Scalars['String']>;
  mechanical_title?: Maybe<Scalars['String']>;
  security_message?: Maybe<Scalars['String']>;
  security_tags?: Maybe<Scalars['String']>;
  security_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nResourcesJaTranslationWhat_I_DoFilterInput = {
  backend_message?: Maybe<StringQueryOperatorInput>;
  backend_tags?: Maybe<StringQueryOperatorInput>;
  backend_title?: Maybe<StringQueryOperatorInput>;
  devops_message?: Maybe<StringQueryOperatorInput>;
  devops_tags?: Maybe<StringQueryOperatorInput>;
  devops_title?: Maybe<StringQueryOperatorInput>;
  frontend_message?: Maybe<StringQueryOperatorInput>;
  frontend_tags?: Maybe<StringQueryOperatorInput>;
  frontend_title?: Maybe<StringQueryOperatorInput>;
  iot_message?: Maybe<StringQueryOperatorInput>;
  iot_tags?: Maybe<StringQueryOperatorInput>;
  iot_title?: Maybe<StringQueryOperatorInput>;
  mechanical_message?: Maybe<StringQueryOperatorInput>;
  mechanical_tags?: Maybe<StringQueryOperatorInput>;
  mechanical_title?: Maybe<StringQueryOperatorInput>;
  security_message?: Maybe<StringQueryOperatorInput>;
  security_tags?: Maybe<StringQueryOperatorInput>;
  security_title?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextLanguage = 'context___language',
  ContextI18nLanguage = 'context___i18n___language',
  ContextI18nLanguages = 'context___i18n___languages',
  ContextI18nDefaultLanguage = 'context___i18n___defaultLanguage',
  ContextI18nRouted = 'context___i18n___routed',
  ContextI18nOriginalPath = 'context___i18n___originalPath',
  ContextI18nPath = 'context___i18n___path',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsSpaceId = 'pluginCreator___pluginOptions___spaceId',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsDownloadLocal = 'pluginCreator___pluginOptions___downloadLocal',
  PluginCreatorPluginOptionsStylesProviderInjectFirst = 'pluginCreator___pluginOptions___stylesProvider___injectFirst',
  PluginCreatorPluginOptionsModules = 'pluginCreator___pluginOptions___modules',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsLanguages = 'pluginCreator___pluginOptions___languages',
  PluginCreatorPluginOptionsDefaultLanguage = 'pluginCreator___pluginOptions___defaultLanguage',
  PluginCreatorPluginOptionsAllPageHeaders = 'pluginCreator___pluginOptions___allPageHeaders',
  PluginCreatorPluginOptionsGoogleAnalyticsTrackingId = 'pluginCreator___pluginOptions___googleAnalytics___trackingId',
  PluginCreatorPluginOptionsGoogleAnalyticsAnonymize = 'pluginCreator___pluginOptions___googleAnalytics___anonymize',
  PluginCreatorPluginOptionsEnvironments = 'pluginCreator___pluginOptions___environments',
  PluginCreatorPluginOptionsLang = 'pluginCreator___pluginOptions___lang',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsDescription = 'pluginCreator___pluginOptions___description',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcons = 'pluginCreator___pluginOptions___icons',
  PluginCreatorPluginOptionsIconsSrc = 'pluginCreator___pluginOptions___icons___src',
  PluginCreatorPluginOptionsIconsSizes = 'pluginCreator___pluginOptions___icons___sizes',
  PluginCreatorPluginOptionsIconsType = 'pluginCreator___pluginOptions___icons___type',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsLocalize = 'pluginCreator___pluginOptions___localize',
  PluginCreatorPluginOptionsLocalizeLang = 'pluginCreator___pluginOptions___localize___lang',
  PluginCreatorPluginOptionsLocalizeName = 'pluginCreator___pluginOptions___localize___name',
  PluginCreatorPluginOptionsLocalizeShortName = 'pluginCreator___pluginOptions___localize___short_name',
  PluginCreatorPluginOptionsLocalizeDescription = 'pluginCreator___pluginOptions___localize___description',
  PluginCreatorPluginOptionsLocalizeStartUrl = 'pluginCreator___pluginOptions___localize___start_url',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsWorkboxConfigGlobPatterns = 'pluginCreator___pluginOptions___workboxConfig___globPatterns',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsSpaceId = 'pluginOptions___spaceId',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsDownloadLocal = 'pluginOptions___downloadLocal',
  PluginOptionsStylesProviderInjectFirst = 'pluginOptions___stylesProvider___injectFirst',
  PluginOptionsModules = 'pluginOptions___modules',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsLanguages = 'pluginOptions___languages',
  PluginOptionsDefaultLanguage = 'pluginOptions___defaultLanguage',
  PluginOptionsAllPageHeaders = 'pluginOptions___allPageHeaders',
  PluginOptionsGoogleAnalyticsTrackingId = 'pluginOptions___googleAnalytics___trackingId',
  PluginOptionsGoogleAnalyticsAnonymize = 'pluginOptions___googleAnalytics___anonymize',
  PluginOptionsEnvironments = 'pluginOptions___environments',
  PluginOptionsLang = 'pluginOptions___lang',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsDescription = 'pluginOptions___description',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcons = 'pluginOptions___icons',
  PluginOptionsIconsSrc = 'pluginOptions___icons___src',
  PluginOptionsIconsSizes = 'pluginOptions___icons___sizes',
  PluginOptionsIconsType = 'pluginOptions___icons___type',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsLocalize = 'pluginOptions___localize',
  PluginOptionsLocalizeLang = 'pluginOptions___localize___lang',
  PluginOptionsLocalizeName = 'pluginOptions___localize___name',
  PluginOptionsLocalizeShortName = 'pluginOptions___localize___short_name',
  PluginOptionsLocalizeDescription = 'pluginOptions___localize___description',
  PluginOptionsLocalizeStartUrl = 'pluginOptions___localize___start_url',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsWorkboxConfigGlobPatterns = 'pluginOptions___workboxConfig___globPatterns',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProvider>;
  modules?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  allPageHeaders?: Maybe<Array<Maybe<Scalars['String']>>>;
  googleAnalytics?: Maybe<SitePluginPluginOptionsGoogleAnalytics>;
  environments?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>;
  theme_color?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  localize?: Maybe<Array<Maybe<SitePluginPluginOptionsLocalize>>>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfig>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProviderFilterInput>;
  modules?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  allPageHeaders?: Maybe<StringQueryOperatorInput>;
  googleAnalytics?: Maybe<SitePluginPluginOptionsGoogleAnalyticsFilterInput>;
  environments?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  localize?: Maybe<SitePluginPluginOptionsLocalizeFilterListInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfigFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsGoogleAnalytics = {
  __typename?: 'SitePluginPluginOptionsGoogleAnalytics';
  trackingId?: Maybe<Scalars['String']>;
  anonymize?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsGoogleAnalyticsFilterInput = {
  trackingId?: Maybe<StringQueryOperatorInput>;
  anonymize?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginPluginOptionsLocalize = {
  __typename?: 'SitePluginPluginOptionsLocalize';
  lang?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsLocalizeFilterInput = {
  lang?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsLocalizeFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsLocalizeFilterInput>;
};

export type SitePluginPluginOptionsStylesProvider = {
  __typename?: 'SitePluginPluginOptionsStylesProvider';
  injectFirst?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsStylesProviderFilterInput = {
  injectFirst?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsWorkboxConfig = {
  __typename?: 'SitePluginPluginOptionsWorkboxConfig';
  globPatterns?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsWorkboxConfigFilterInput = {
  globPatterns?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  siteUrl?: Maybe<Scalars['String']>;
  title?: Maybe<SiteSiteMetadataTitle>;
  shortTitle?: Maybe<SiteSiteMetadataShortTitle>;
  url?: Maybe<SiteSiteMetadataUrl>;
  description?: Maybe<SiteSiteMetadataDescription>;
  author?: Maybe<SiteSiteMetadataAuthor>;
  icon?: Maybe<SiteSiteMetadataIcon>;
  backgroundColor?: Maybe<Scalars['String']>;
  themeColor?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataAuthor = {
  __typename?: 'SiteSiteMetadataAuthor';
  ja?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataAuthorFilterInput = {
  ja?: Maybe<StringQueryOperatorInput>;
  en?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataDescription = {
  __typename?: 'SiteSiteMetadataDescription';
  ja?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataDescriptionFilterInput = {
  ja?: Maybe<StringQueryOperatorInput>;
  en?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFilterInput = {
  siteUrl?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SiteSiteMetadataTitleFilterInput>;
  shortTitle?: Maybe<SiteSiteMetadataShortTitleFilterInput>;
  url?: Maybe<SiteSiteMetadataUrlFilterInput>;
  description?: Maybe<SiteSiteMetadataDescriptionFilterInput>;
  author?: Maybe<SiteSiteMetadataAuthorFilterInput>;
  icon?: Maybe<SiteSiteMetadataIconFilterInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  themeColor?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataIcon = {
  __typename?: 'SiteSiteMetadataIcon';
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataIconFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataShortTitle = {
  __typename?: 'SiteSiteMetadataShortTitle';
  ja?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataShortTitleFilterInput = {
  ja?: Maybe<StringQueryOperatorInput>;
  en?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataTitle = {
  __typename?: 'SiteSiteMetadataTitle';
  ja?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataTitleFilterInput = {
  ja?: Maybe<StringQueryOperatorInput>;
  en?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataUrl = {
  __typename?: 'SiteSiteMetadataUrl';
  ja?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataUrlFilterInput = {
  ja?: Maybe<StringQueryOperatorInput>;
  en?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type ProjectDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulProject: (
    { __typename?: 'ContentfulProjectConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulProjectEdge' }
      & { node: (
        { __typename?: 'ContentfulProject' }
        & Pick<ContentfulProject, 'node_locale' | 'name' | 'slug' | 'startDate' | 'during' | 'comment' | 'siteUrl' | 'sourceUrl'>
        & { mainImage?: Maybe<(
          { __typename?: 'ContentfulAsset' }
          & Pick<ContentfulAsset, 'title'>
          & { file?: Maybe<(
            { __typename?: 'ContentfulAssetFile' }
            & Pick<ContentfulAssetFile, 'url'>
            & { details?: Maybe<(
              { __typename?: 'ContentfulAssetFileDetails' }
              & { image?: Maybe<(
                { __typename?: 'ContentfulAssetFileDetailsImage' }
                & Pick<ContentfulAssetFileDetailsImage, 'height' | 'width'>
              )> }
            )> }
          )> }
        )>, role?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulRole' }
          & Pick<ContentfulRole, 'name'>
        )>>>, assigne?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulAssigne' }
          & Pick<ContentfulAssigne, 'name'>
        )>>>, system?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulSkill' }
          & Pick<ContentfulSkill, 'name'>
        )>>>, language?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulSkill' }
          & Pick<ContentfulSkill, 'name'>
        )>>>, tools?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulSkill' }
          & Pick<ContentfulSkill, 'name'>
        )>>> }
      ) }
    )> }
  ) }
);

export type QualificationsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type QualificationsDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulQualifications: (
    { __typename?: 'ContentfulQualificationsConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulQualificationsEdge' }
      & { node: (
        { __typename?: 'ContentfulQualifications' }
        & Pick<ContentfulQualifications, 'id' | 'node_locale' | 'name' | 'comment' | 'date'>
      ) }
    )> }
  ) }
);

export type SkillDataQueryVariables = Exact<{ [key: string]: never; }>;


export type SkillDataQuery = (
  { __typename?: 'Query' }
  & { allContentfulSkillMap: (
    { __typename?: 'ContentfulSkillMapConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulSkillMapEdge' }
      & { node: (
        { __typename?: 'ContentfulSkillMap' }
        & Pick<ContentfulSkillMap, 'id' | 'name' | 'node_locale'>
        & { skills?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulSkill' }
          & Pick<ContentfulSkill, 'id' | 'level' | 'name'>
        )>>> }
      ) }
    )> }
  ) }
);

export type BuildTimeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type BuildTimeDataQuery = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & Pick<Site, 'buildTime'>
  )> }
);

export type SiteMetaDataQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteMetaDataQuery = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata?: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'backgroundColor' | 'themeColor'>
      & { title?: Maybe<(
        { __typename?: 'SiteSiteMetadataTitle' }
        & Pick<SiteSiteMetadataTitle, 'ja' | 'en'>
      )>, shortTitle?: Maybe<(
        { __typename?: 'SiteSiteMetadataShortTitle' }
        & Pick<SiteSiteMetadataShortTitle, 'ja' | 'en'>
      )>, url?: Maybe<(
        { __typename?: 'SiteSiteMetadataUrl' }
        & Pick<SiteSiteMetadataUrl, 'ja' | 'en'>
      )>, description?: Maybe<(
        { __typename?: 'SiteSiteMetadataDescription' }
        & Pick<SiteSiteMetadataDescription, 'ja' | 'en'>
      )>, author?: Maybe<(
        { __typename?: 'SiteSiteMetadataAuthor' }
        & Pick<SiteSiteMetadataAuthor, 'ja' | 'en'>
      )>, icon?: Maybe<(
        { __typename?: 'SiteSiteMetadataIcon' }
        & Pick<SiteSiteMetadataIcon, 'src' | 'sizes' | 'type'>
      )> }
    )> }
  )> }
);
