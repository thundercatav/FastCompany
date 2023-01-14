import React from "react";
import Qualities from "./qualities";
import BookMark from "./bookmark";

const User = ({
  _id,
  name,
  qualities,
  completedMeetings,
  profession,
  rate,
  onDelete,
  bookmark,
  onToggleBookMark,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((q) => (
          <Qualities key={q._id} {...q} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <BookMark status={bookmark} onClick={() => onToggleBookMark(_id)} />
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn btn-danger">
          Удалить
        </button>
      </td>
    </tr>
  );
};
export default User;
