window.deleteStory = async function (id) {

  if (!confirm("Delete this story? This cannot be undone.")) {
    return;
  }

  const { error } = await supabaseClient
    .from("stories")
    .delete()
    .eq("id", id)
    .eq("owner_id", currentUser.id);

  if (error) {
    alert(error.message);
    return;
  }

  location.reload();
};
