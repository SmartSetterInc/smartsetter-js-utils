import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/material/styles"

export default styled((props) => (
  <IconButton color="error" title="Delete" {...props}>
    <DeleteIcon />
  </IconButton>
))(() => ({}))
