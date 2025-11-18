  <template>
  <div class="header">
        <ul class="nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="addPost.html">addPost</a></li>
        </ul>
        <div class="menu-container">
        <i class="menu_icon"><img src="@\components\icons\me.png" width="50" height="50" alt="My picture"></i>
        </div>
    </div>
  </template>

<style scoped>
.header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding-top: .5em;
    padding-bottom: .5em;
    padding-left: .5em;
    border: 1px solid #000000ff;
    background-color: #1dbe00ff;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);

    border-radius: 5px;
    position:sticky;
    top: 0;
}
</style>