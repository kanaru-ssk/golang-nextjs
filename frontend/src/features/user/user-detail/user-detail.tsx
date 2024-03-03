import { fetchUserDetail } from "./fetch-user-detail";

type Props = {
  userId: string;
};

export async function UserDetail({ userId }: Props) {
  const { user } = await fetchUserDetail(userId);

  return (
    <dl>
      <dt>userId</dt>
      <dd>{user.id}</dd>
      <dt>userName</dt>
      <dd>{user.name}</dd>
    </dl>
  );
}
