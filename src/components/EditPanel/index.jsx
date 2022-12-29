import { EditPanelContainer } from "./style";

export default function EditPanel({ isPanelOpen, openedCard, editCard, closePanel }) {
    console.log(openedCard)

    function handleEditCard(e){
        e.preventDefault();
        const title = e.target.children.titulo.innerHTML == "Adicione um Título" ? "" : e.target.children.titulo.innerHTML;
        const description = e.target.children.description.innerHTML;
        const color = openedCard.color;
        const id = openedCard.id;
        const card = {
            title,
            description,
            color,
            id
        }


        editCard(card);
    }

  return (
    <EditPanelContainer isPanelOpen={isPanelOpen} color={openedCard.color}>
        <div className="close" onClick={closePanel}>asdf</div>
        <form onSubmit={handleEditCard}>
            <h1 className="titulo" id="titulo" name="titulo" contentEditable="true">
                {openedCard.title ? openedCard.title : "Adicione um Título"}
            </h1>
            <div contentEditable="true" className="description" id="description" name="description">
                {openedCard.description}
            </div>
            <footer>
                <button type="submit">Concluir</button>
                <button type="button" onClick={closePanel}>Cancelar</button>
            </footer>
        </form>
    </EditPanelContainer>
  )
}
