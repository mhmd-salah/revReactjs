
class GlobalStore{
  private static instance: GlobalStore;
  private data: Record<string, unknown>;

  private constructor(){
    this.data = {};
  }

  public static getInstance():GlobalStore{
    if(!GlobalStore.instance){
      GlobalStore.instance = new GlobalStore();
    }
    return GlobalStore.instance;
  }
  
  public setData(key:string, value:unknown){
    this.data[key] = value;
  }
  public getData(key:string){
    return this.data[key];
  }
}

export default GlobalStore;