<template>
  <header>
    <div class="headline">
      <div class="headline-menu">
        <ul>
          <li class="lst">이름</li>
          <li class="lst">직책</li>
          <li><button class="btn btn-primary">로그아웃</button></li>
        </ul>
      </div>
    </div>
  </header>
  <nav> </nav>
</template>

<script>
export default {
  data() {
    return {
      boxPadding: '20px'
    }
  }
}
</script>

<style scoped>
nav {
  padding: 80px;;
}
header {
  position: fixed;
  top: 8px;
  width: 100%;
  height: 15%;
  border-bottom: 1px solid #E6E6E6;
  background-color: #FFFFFF;
}

.headline {
  display: flex;
  height: 100%;
  justify-content: right;
  align-items: center;
}

.headline-menu {
  display: flex;
  height: 100%;
}
.btn {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  color: #343532;
  background-color: #DFD6BF;
  bottom: 50%;
  border: none;
  border-radius: 0.5em;
  min-height: 2.5em;
  min-width: 7em;
  display: inline-block;
  transition: background-color 1s ease, opacity 1s ease;
}
.btn:hover {
  background-color: rgba(234, 234, 234, 0.5);
}

ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 1.4em;
  text-align: center;
}
.lst {
  opacity: 0.6;
}
ul li {
  padding-left: 3em;
  list-style-type: none;
}
</style>