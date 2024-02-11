import { useEffect, useRef, useState } from "react";
import ActionCardMolecule from "../molecules/action-card.molecule";
import LogoOptionAtom from "../atoms/logo-option.atom";
import axios from "axios";
import { baseUrl } from "../../constants/api.constant";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function BoardHeaderOrganism({ title, id, setTitle }) {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const inputRef = useRef(null);

  // Esta función se encarga de cambiar la visibilidad del componente ActionCardMolecule
  function handleClick() {
    setIsVisible(!isVisible);
    if (!isEdit) setIsEdit(!isEdit);
  }

  // maneja la eliminación de la placa. y luego redirige al usuario a la página de inicio
  async function handleDelete() {
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };
      await axios.delete(baseUrl + "/boards/" + id, { headers });
      navigate("/");
    } catch (error) {
      console.log("Error al eliminar la placa:", error);
    }
  }

  // Esta función cambia el estado isEdit para activar o desactivar el modo de edición
  function handleEditBoard() {
    setIsEdit(!isEdit);
    inputRef.current.focus();
    setIsVisible(!isVisible);
  }

  // Si isEdit es falso, enfoca el input para que el usuario pueda editar el título.
  useEffect(() => {
    if (!isEdit) inputRef.current.focus();
  }, [isEdit]);

  // Esta función maneja el cambio y/o actualizacion de título de la placa
  async function handleChangeTitle(e) {
    e.preventDefault();
    try {
      const headers = {
        Authorization: window.localStorage.getItem("auth-session"),
      };
      await axios.patch(baseUrl + "/boards/" + id, { title }, { headers });
    } catch (error) {
      console.log("Error al actualizar el título de la placa:", error);
    }
  }

  return (
    <div className=" relative w-fit">
      <form className="flex gap-2" onSubmit={handleChangeTitle}>
        <input
          ref={inputRef}
          className="outline-none border-none  bg-red-200 w-40 text-xl font-bold"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          defaultValue={title}
        />
        <span role="button" onClick={handleClick}>
          <LogoOptionAtom></LogoOptionAtom>
        </span>
      </form>

      {isVisible ? (
        <ActionCardMolecule
          handleEdit={handleEditBoard}
          handleDelete={handleDelete}
        ></ActionCardMolecule>
      ) : (
        ""
      )}
    </div>
  );
}

// Validacion de Props
BoardHeaderOrganism.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default BoardHeaderOrganism;
