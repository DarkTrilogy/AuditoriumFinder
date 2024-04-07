// import { useMoveBack } from "../../hooks/useMoveBack";
// import ButtonText from "../../ui/ButtonText";
// import Empty from "../../ui/Empty";
// import Heading from "../../ui/Heading";
// import Row from "../../ui/Row";
// import Spinner from "../../ui/Spinner";
// import Tag from "../../ui/Tag";
// import UserDataBox from "../users/UserDataBox";

function AudienceDetail() {}
//   const { audience, isLoading } = useAudience();
//   const moveBack = useMoveBack();
//   const navigate = useNavigate();

//   if (isLoading) return <Spinner />;
//   if (!audience) return <Empty resourceName="audience" />;

//   const { userId, userNickname: nickname } = audience;
//   const status = "friend";

//   const statusToTagName = {
//     unconfirmed: "blue",
//     "checked-in": "green",
//     "checked-out": "silver",
//     friend: "green",
//   };

//   return (
//     <>
//       <Row type="horizontal">
//         <HeadingGroup>
//           <Heading as="h1">
//             User #{userId} - {nickname}
//           </Heading>
//           <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
//         </HeadingGroup>
//         <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
//       </Row>

//       <UserDataBox user={user} />

//       <ButtonGroup>
//         {status === "unconfirmed" && (
//           <Button onClick={() => navigate(`/checkin/${userId}`)}>
//             Check in
//           </Button>
//         )}

//         {status === "checked-in" && (
//           <Button
//             icon={<HiArrowUpOnSquare />}
//             onClick={() => checkout(userId)}
//             disabled={isCheckingOut}
//           >
//             Check out
//           </Button>
//         )}
//         <Button variation="secondary" onClick={moveBack}>
//           Back
//         </Button>
//       </ButtonGroup>
//     </>
//   );
// }

export default AudienceDetail;
