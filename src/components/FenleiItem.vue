<template>
  <div class="fenleiItem">
    <div class="jsx-2246057180 root">
      <div class="jsx-2246057180 hd">
        <h3 class="jsx-2246057180">{{itemInfo.name}}</h3>
      </div>
      <div class="jsx-2246057180 bd">
        <div class="jsx-1877094313 root" style="color: rgb(214, 186, 140);">
          <div class="jsx-1877094313 name">
            <a class href="/categories/135481276860730989">
              <span class="jsx-1838174039 block">{{itemInfo.categories[0].name}}</span>
            </a>
          </div>
          <div
            class="jsx-1877094313 actions isSubscribed"
            style="background-color: rgba(214, 186, 140, 0.2);"
          >
            <button class="jsx-1877094313 action">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="margin-top: 2px;"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="jsx-1877094313 root" style="color: rgb(214, 186, 140);">
          <div class="jsx-1877094313 name">
            <a class href="/categories/135481276860730989">
              <span class="jsx-1838174039 block">{{itemInfo.categories[1].name}}</span>
            </a>
          </div>
          <div
            class="jsx-1877094313 actions isSubscribed"
            style="background-color: rgba(214, 186, 140, 0.2);"
          >
            <button class="jsx-1877094313 action">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="margin-top: 2px;"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="jsx-1877094313 root" style="color: rgb(214, 186, 140);">
          <div class="jsx-1877094313 name">
            <a class href="/categories/135481276860730989">
              <span class="jsx-1838174039 block">{{itemInfo.categories[2].name}}</span>
            </a>
          </div>
          <div
            class="jsx-1877094313 actions isSubscribed"
            style="background-color: rgba(214, 186, 140, 0.2);"
          >
            <button class="jsx-1877094313 action">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="margin-top: 2px;"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="jsx-1877094313 root" style="color: rgb(214, 186, 140);">
          <div class="jsx-1877094313 name">
            <a class href="/categories/135481276860730989">
              <span class="jsx-1838174039 block">{{itemInfo.categories[3].name}}</span>
            </a>
          </div>
          <div
            class="jsx-1877094313 actions isSubscribed"
            style="background-color: rgba(214, 186, 140, 0.2);"
          >
            <button class="jsx-1877094313 action">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="margin-top: 2px;"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
          </div>
        </div>
      
        
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["itemInfo"]
};
</script>

<style scoped lang="scss">
    .fenleiItem{
        h3{
            margin: 0;
            font: inherit;
            font-size: 5.6vw;
            display: block;
            // margin-block-start: 1em;
            margin-block-end: 3vw;
        }
        a{
            color: inherit;
            color: inherit;
            text-decoration: none;
        }
        button {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    border: none;
    outline: none;
    background: none;
    -webkit-appearance: none;
    appearance: none;
    -webkit-user-select: none;
    user-select: none;
    pointer-events: auto;
}
        .root {
         margin:1vw 0px 0px;
        }

.hd {
  width: 94vw;
    font-size: 20px;
    font-weight: 400;
    padding: 10px 0px 8px 2%;
    border-bottom: 0.5px solid rgb(230, 230, 230);
    // display: flex;
    // justify-content: space-between;
    // align-content: flex-start;
}
.bd{
  width: 92vw;
}
.jsx-2246057180 {
    display: flex;
    flex-wrap: wrap;
    padding: 1.5vw 3vw 0px;
    justify-content: space-between;
    align-content: flex-start;
}
.actions {
    display: block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    cursor: pointer;
}

        .root.jsx-1877094313 {
    max-width: 42%;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    text-align: left;
    margin-bottom: 20px;
    flex: 1 0 42%;
}
        .name{
                font-size: 1rem;
                word-break: break-all;
                font-weight: 400;
                flex: 1 1 0%;
        }
    }
</style>