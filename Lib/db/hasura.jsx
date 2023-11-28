/*
This is an example snippet - you should consider tailoring it
to your service.
*/

export const CreateNewuser = async (jwt_token, metadeta) => {
  const { phoneNumber, issuer, publicAddress } = metadeta;

  const hasura = await fetchGraphQL("CreateNewuser", jwt_token, {
    phoneNumber,
    issuer,
    publicAddress,
  });
  return hasura?.data?.users;
};
export const isNewUser = async (jwt_token, issuer) => {
  const hasura = await fetchGraphQL("FindUser", jwt_token, { issuer });
  return hasura?.data?.users?.length === 0;
};

export const IsVideoExists = async (jwt_token, issuer, videoid) => {
  const res = await fetchGraphQL("IsVideoExists", jwt_token, {
    issuer,
    videoid,
  });
  return res?.data?.stats?.length !== 0;
};

export const GetLikeDetails = async (jwt_token, user_id, video_id) => {
  const res = await fetchGraphQL("GetLikeDetails", jwt_token, {
    user_id,
    video_id,
  });
  return res?.data?.stats[0]?.favourite;
};

export const WatchedVideos = async (jwt_token) => {
  const res = await fetchGraphQL("WatchedVideos", jwt_token);
  return res?.data?.stats;
};

export const LikeVideo = async (jwt_token, user_id, video_id) => {
  const res = await fetchGraphQL("LikeVideo", jwt_token, {
    user_id,
    video_id,
  });
  return res?.data?.update_stats?.affected_rows;
};
export const DislikeVideo = async (jwt_token, user_id, video_id) => {
  const res = await fetchGraphQL("DislikeVideo", jwt_token, {
    user_id,
    video_id,
  });
  return res?.data?.update_stats?.affected_rows;
};
export const InsertVideo = async (jwt_token, user_id, video_id) => {
  const res = await fetchGraphQL("InsertVideo", jwt_token, {
    user_id,
    video_id,
  });
  return res?.data?.stats?.length !== 0;
};

export const LikedVideos = async (jwt_token) => {
  const res = await fetchGraphQL("LikedVideos", jwt_token,{
    userid:`${Math.random()}`
  });
  return res?.data?.stats;
};


const doperationsDoc = `
query FindUser($issuer: String!) {
  users(where: {issuer: {_eq: $issuer}}) {
    id
    issuer
    phoneNumber
    publicadr
  }
}
 
mutation CreateNewuser($issuer: String!, $phoneNumber : String!, $publicAddress: String!) {
  insert_users_one(object: {phoneNumber: $phoneNumber, issuer: $issuer, publicadr: $publicAddress}) {
    phoneNumber
    id
    issuer
  }
}

query IsVideoExists($issuer: String!, $videoid: String!) {
  stats(where: {user_id: {_eq: $issuer}, video_id: {_eq: $videoid}}) {
    favourite
    id
    user_id
    video_id
    watched
  }
}

mutation InsertVideo($user_id: String!,$video_id: String!) {
  insert_stats_one(object: {favourite: 0, user_id: $user_id, video_id: $video_id, watched: true}) {
    favourite
    id
    user_id
    video_id
    watched
  }
}

mutation LikeVideo($user_id: String!,$video_id: String!) {
  update_stats(where: {user_id: {_eq: $user_id}, video_id: {_eq: $video_id}}, _set: {favourite: 1}) {
    affected_rows
    returning {
      favourite
      id
      watched
      video_id
      user_id
    }
  }
}
mutation DislikeVideo($user_id: String!,$video_id: String!) {
  update_stats(where: {user_id: {_eq: $user_id}, video_id: {_eq: $video_id}}, _set: {favourite: 2}) {
    affected_rows
    returning {
      favourite
      id
      watched
      video_id
      user_id
    }
  }
}


query GetLikeDetails($user_id: String!,$video_id: String!) {
  stats(where: {user_id: {_eq: $user_id}, video_id: {_eq: $video_id}}) {
    favourite
  }
}



query WatchedVideos {
  stats(order_by: {id: desc}) {
    video_id
    id
  }
}


query LikedVideos($userid:String!) {
  stats(where: {favourite: {_eq: 1},_not:{user_id:{_eq:$userid}}}) {
    video_id
  }
}

`;

export default async function fetchGraphQL(
  operationName,
  token,
  variables = {},
  operationsDoc = doperationsDoc
) {
  const result = await fetch(process.env.Hasura_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });
  return await result.json();
}
